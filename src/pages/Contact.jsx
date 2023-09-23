// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
//   Alert,
// } from "@mui/material";
// import { useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";

// import { useScroll } from "../components/ScrollContext";

// function Contact({ dataArray }) {
//   let { id } = useParams();
//   const contactItem = dataArray?.find((item) => item.key === Number(id));

//   const [selectedRole, setSelectedRole] = useState(
//     contactItem ? contactItem.title : ""
//   );
//   const [status, setStatus] = useState("");
//   const [result, setResult] = useState("");

//   const { contactMenuRef } = useScroll();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.shouldScroll && contactMenuRef.current) {
//       contactMenuRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     event.preventDefault();
//     setStatus("sending");
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "fb2016fc-aede-4b4b-abe4-7a2f1f08301e");

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     }).then((res) => res.json());

//     if (res.success) {
//       setStatus("success");
//       setResult(res.message);
//     } else {
//       setStatus("error");
//       setResult(res.message);
//     }
//   };

//   return (
//     <div
//       ref={contactMenuRef}
//       style={{ paddingTop: "100px" }}
//     >
//       <Container maxWidth="sm">
//         <form onSubmit={onSubmit}>
//           <Box mb={2}>
//             <TextField
//               fullWidth
//               label="Your Name"
//               variant="outlined"
//               type="text"
//               name="name"
//             />
//           </Box>

//           <Box mb={2}>
//             <TextField
//               fullWidth
//               label="Your Email"
//               variant="outlined"
//               type="email"
//               name="email"
//             />
//           </Box>

//           <Box mb={2}>
//             <FormControl
//               fullWidth
//               variant="outlined"
//             >
//               <InputLabel>Vitamin Package</InputLabel>
//               <Select
//                 name="role" // Adjusted to a singular form
//                 label="Vitamin Package"
//                 value={selectedRole}
//                 onChange={handleRoleChange}
//               >
//                 {dataArray.map((data) => (
//                   <MenuItem
//                     key={data.title}
//                     value={data.title}
//                   >
//                     {data.title}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Box>

//           <Box mb={2}>
//             <TextField
//               fullWidth
//               label="Additional Messages or Comments"
//               variant="outlined"
//               multiline
//               rows={4}
//               name="message"
//             />
//           </Box>

//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//           >
//             Send
//           </Button>
//         </form>
//         <Box mt={2}>
//           {status && (
//             <Alert severity={status === "success" ? "success" : "error"}>
//               {result}
//             </Alert>
//           )}
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Contact;

import { useState } from "react";

import {
  Button,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useScroll } from "../components/ScrollContext";

function Contact({ dataArray }) {
  let { id } = useParams();
  const contactItem = dataArray?.find((item) => item.key === Number(id));

  const [selectedRole, setSelectedRole] = useState(
    contactItem ? contactItem.title : ""
  );
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const { contactMenuRef } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.shouldScroll && contactMenuRef.current) {
      contactMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setResult("Sending...");

    if (!selectedDate || !selectedTime) {
      setStatus("error");
      setResult("Please select both date and time.");
      return;
    }

    const dateObj = new Date(selectedDate);
    const timeObj = new Date(selectedTime);

    const formattedDate =
      (dateObj.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      dateObj.getDate().toString().padStart(2, "0") +
      "/" +
      dateObj.getFullYear();

    const hours24 = timeObj.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = timeObj.getMinutes().toString().padStart(2, "0");
    const ampm = hours24 < 12 ? "AM" : "PM";
    const formattedTime = hours12 + ":" + minutes + " " + ampm;
    const formData = new FormData(event.target);
    formData.append("access_key", "fb2016fc-aede-4b4b-abe4-7a2f1f08301e");
    formData.append("date", formattedDate); // Appending the formatted date
    formData.append("time", formattedTime); // Appending the formatted time

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setStatus("success");
          setResult(res.message);
        } else {
          setStatus("error");
          setResult(res.message);
        }
      })
      .catch((error) => {
        setStatus("error");
        setResult("An error occurred while sending the form.");
        console.error("There was an error with the fetch operation:", error);
      });
  };

  return (
    <div
      ref={contactMenuRef}
      style={{ paddingTop: "100px" }}
    >
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <input
            type="hidden"
            name="subject"
            value="Contact Form"
          />
          <input
            type="hidden"
            name="from_name"
            value="IV Direct"
          />
          <Box
            mb={2}
            name="date"
            sx={{
              display: "flex",
              justifyContent: "space-between", // Updated to space-between
            }}
          >
            <DatePicker
              sx={{ flexGrow: 1 }}
              label="Date: Month/Date/Year"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              /* other props here */
            ></DatePicker>

            <TimePicker
              label="Requested Time"
              value={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              format="hh:mm a"
              sx={{
                flexGrow: 1,
                marginLeft: "16px", // Adjust this value based on your design preference
              }}
              minutesStep={30}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              type="text"
              name="name"
            />
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              type="email"
              name="email"
            />
          </Box>

          <Box mb={2}>
            <FormControl
              fullWidth
              variant="outlined"
            >
              <InputLabel>Vitamin Package</InputLabel>
              <Select
                name="role" // Adjusted to a singular form
                label="Vitamin Package"
                value={selectedRole}
                onChange={handleRoleChange}
              >
                {dataArray.map((data) => (
                  <MenuItem
                    key={data.title}
                    value={data.title}
                  >
                    {data.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              label="Additional Messages or Comments"
              variant="outlined"
              multiline
              rows={4}
              name="message"
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </form>
        <Box mt={2}>
          {status && (
            <Alert severity={status === "success" ? "success" : "error"}>
              {result}
            </Alert>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Contact;
