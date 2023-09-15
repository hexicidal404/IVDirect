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
// } from "@mui/material";

// function Forms({ dataArray }) {
//   const [selectedRoles, setSelectedRoles] = useState([]);

//   const handleRoleChange = (event) => {
//     setSelectedRoles(event.target.value);
//   };

//   return (
//     <Container maxWidth="sm">
//       <form
//         name="contact"
//         method="POST"
//         data-netlify="true"
//       >
//         <input
//           type="hidden"
//           name="form-name"
//           value="name_of_my_form"
//         />

//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="Your Name"
//             variant="outlined"
//             type="text"
//             name="name"
//           />
//         </Box>

//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="Your Email"
//             variant="outlined"
//             type="email"
//             name="email"
//           />
//         </Box>

//         <Box mb={2}>
//           <FormControl
//             fullWidth
//             variant="outlined"
//           >
//             <InputLabel>Your Role</InputLabel>
//             <Select
//               multiple
//               name="role[]"
//               label="Your Role"
//               value={selectedRoles}
//               onChange={handleRoleChange}
//             >
//               {dataArray.map((data) => (
//                 <MenuItem
//                   key={data.title}
//                   value={data.title}
//                 >
//                   {data.title}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="Message"
//             variant="outlined"
//             multiline
//             rows={4}
//             name="message"
//           />
//         </Box>

//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//         >
//           Send
//         </Button>
//       </form>
//     </Container>
//   );
// }

// export default Forms;

import React, { useState } from "react";
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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useScroll } from "../components/ScrollContext";

function Forms({ dataArray }) {
  const [selectedRole, setSelectedRole] = useState(""); // Renamed to a singular form
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

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
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "fb2016fc-aede-4b4b-abe4-7a2f1f08301e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("success");
      setResult(res.message);
    } else {
      setStatus("error");
      setResult(res.message);
    }
  };

  return (
    <div
      ref={contactMenuRef}
      style={{ padding: "70px" }}
    >
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
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

export default Forms;
