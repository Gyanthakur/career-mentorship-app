import { createContext, use, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
	// const currencySymbol = "$";

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	// const [doctors, setDoctors] = useState([]);
	const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') :false);
	const [studentData,setStudentData] = useState(false)


	// const getDoctorsData = async () => {
	// 	try {
	// 		const { data } = await axios.get(backendUrl + "/api/doctor/list");
	// 		if (data.success) {
	// 			setDoctors(data.doctors);
	// 			// toast.success("Doctors list available")
	// 		} else {
	// 			toast.error(error.message);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error(error.message);
	// 	}
	// };

	const loadStudentProfileData = async () => {
  try {
    const { data } = await axios.get(
      backendUrl + "/api/student/get-profile",
      {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Send token correctly
        },
      }
    );

    if (data.success) {
      setStudentData(data.studentData); // ✅ match your backend response field
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || error.message);
  }
};


	const value = {
		
		token,setToken,studentData,setStudentData, loadStudentProfileData, backendUrl
		

	};

	// useEffect(() => {
	// 	// getDoctorsData();
	// }, []);

	useEffect(() => {
  if (token) {
    loadStudentProfileData();
  } else {
    setStudentData(false);
  }
}, [token]);

// useEffect(() => {
//   if (studentData) {
//     console.log("✅ student Profile Data Loaded", studentData.image);
//   }
// }, [studentData]);



	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
