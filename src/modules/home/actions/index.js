import axios from "../../../config/network";
import { baseUrl } from "../../../config/apiurl";
import Message from "antd-message";
// export const requestForUserAuthentication = reqBody => {
//   return async dispatch => {
//     dispatch({ type: "REQUEST_FOR_AUTHENTICATION_PENDING", reqBody });
//     try {
//       var apiUrl = baseUrl.ekkpass + "/users/phone";
//       var response = await axios.post(apiUrl, reqBody);
//       dispatch({ type: "REQUEST_FOR_AUTHENTICATION_RESOLVED", response });
//       if (response.status === 202) {
//         dispatch({ type: "SAVE_AUTH_TOKEN_WHEN_OTP_TOKEN_VERIFIED", response });
//       }
//       return response;
//     } catch (error) {
//       dispatch({ type: "REQUEST_FOR_AUTHENTICATION_FAILED", payload: error });
//       message.error(error.response.data.message);
//       return error;
//     }
//   };
// };
