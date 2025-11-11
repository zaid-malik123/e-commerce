import axios from "axios";
import { serverUrl } from "../App";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/slice/userSlice";
const useGetCurrentUser = () => {
  const dispatch = useDispatch()  
  const {user} =  useSelector(state => state.userSlice) 
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/user/curr-user`, {
        withCredentials: true,
      });
      dispatch(setUser(res.data))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [user]);
};

export default useGetCurrentUser;
