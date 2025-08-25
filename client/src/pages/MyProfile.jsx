import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const {
    studentData,
    setStudentData,
    loadStudentProfileData,
    token,
    backendUrl,
  } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Update Student Profile API
  const updateStudentProfileData = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", studentData.name);
      formData.append("phone", studentData.phone);
      formData.append("gender", studentData.gender);
      formData.append("dob", studentData.dob);

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(
        `${backendUrl}/api/student/update-profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await loadStudentProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  if (!studentData) return null;

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 text-sm bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg pt-20 transition-all">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        {isEdit ? (
          <label htmlFor="image" className="cursor-pointer relative group">
            <img
              className="w-36 h-36 rounded-full object-cover ring-4 ring-pink-200 dark:ring-pink-600 opacity-80 group-hover:opacity-100 transition-all"
              src={image ? URL.createObjectURL(image) : studentData.image}
              alt="profile"
            />
            <div className="absolute bottom-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded shadow">
              Change
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img
            className="w-36 h-36 rounded-full object-cover ring-4 ring-pink-200 dark:ring-pink-600"
            src={studentData.image}
            alt="profile"
          />
        )}

        {/* Name */}
        {isEdit ? (
          <input
            className="mt-4 text-2xl font-semibold text-center bg-gray-100 dark:bg-gray-700 dark:text-white px-3 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none"
            type="text"
            value={studentData.name}
            onChange={(e) =>
              setStudentData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-semibold text-2xl text-gray-800 dark:text-gray-100 mt-4">
            {studentData.name}
          </p>
        )}
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* Contact Information */}
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold mb-3 uppercase tracking-wide text-xs">
          Contact Information
        </p>
        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-gray-700 dark:text-gray-300">
          <span className="font-medium">Email:</span>
          <span className="text-blue-500">{studentData.email}</span>

          <span className="font-medium">Phone:</span>
          {isEdit ? (
            <input
              className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-xs"
              type="tel"
              value={studentData.phone}
              onChange={(e) =>
                setStudentData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          ) : (
            <span className="text-blue-400">{studentData.phone}</span>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold mb-3 uppercase tracking-wide text-xs">
          Basic Information
        </p>
        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-gray-700 dark:text-gray-300">
          <span className="font-medium">Gender:</span>
          {isEdit ? (
            <select
              className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-[120px]"
              onChange={(e) =>
                setStudentData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={studentData.gender}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className="text-gray-500">{studentData.gender}</span>
          )}

          <span className="font-medium">Birthday:</span>
          {isEdit ? (
            <input
              className="bg-gray-100 dark:bg-gray-700 dark:text-white px-2 py-1 rounded focus:ring-2 focus:ring-pink-400 outline-none max-w-[160px]"
              onChange={(e) =>
                setStudentData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={studentData.dob}
              type="date"
            />
          ) : (
            <span className="text-gray-500">{studentData.dob}</span>
          )}

          <span className="font-medium">Role:</span>
          <span>{studentData.role}</span>
        </div>
      </div>

      {/* Save / Edit Buttons */}
      <div className="flex justify-center mt-6">
        {isEdit ? (
          <button
            className="flex items-center justify-center gap-2 border border-pink-500 text-pink-500 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all disabled:opacity-50"
            onClick={updateStudentProfileData}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-pink-600 hover:border-white dark:border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </>
            ) : (
              "Save Information"
            )}
          </button>
        ) : (
          <button
            className="border border-pink-500 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
