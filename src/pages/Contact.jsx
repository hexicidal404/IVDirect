/* eslint-disable react/prop-types */
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
  Paper,
} from "@mui/material";
import ImageComponent from "../components/Logo.jsx";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useScroll } from "../components/ScrollContext";
import { useTheme } from "@mui/material/styles";

function Contact({ dataArray }) {
  let { id } = useParams();
  const contactItem = dataArray?.find((item) => item.key === Number(id));

  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const { contactMenuRef } = useScroll();

  const location = useLocation();

  let selectedPackageIdFromPreviousPage = location.state?.packageId;

  let defaultSelectedRole = contactItem ? contactItem.title : "";

  if (selectedPackageIdFromPreviousPage) {
    let packageItem = dataArray?.find(
      (item) => item.key === Number(selectedPackageIdFromPreviousPage)
    );
    defaultSelectedRole = packageItem ? packageItem.title : defaultSelectedRole;
  }
  const [selectedRole, setSelectedRole] = useState(defaultSelectedRole);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (location.state?.shouldScroll && contactMenuRef.current) {
      // Get the position of the contact form
      const topPosition =
        contactMenuRef.current.getBoundingClientRect().top + window.scrollY;

      // Calculate offset to center it on the page (half of viewport height minus half of element height)
      const offset =
        window.innerHeight / 3 - contactMenuRef.current.clientHeight / 3;

      // Scroll to the calculated position
      window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
    }
  }, [location]);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const myForm = event.target;

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
    formData.append("date", formattedDate); // Ensure this key matches the name attribute of your DatePicker
    formData.append("time", formattedTime); // Ensure this key matches the name attribute of your TimePicker

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          setResult("Thank you! Your submission has been received.");
        } else {
          response.json().then((data) => {
            setStatus("error");
            setResult(data.message || "An error occurred.");
          });
        }
      })
      .catch((error) => {
        setStatus("error");
        setResult("An error occurred while sending the form.");
        console.error("There was an error with the fetch operation:", error);
      });
  };
  const theme = useTheme();

  const backgroundImage =
    "https://images.unsplash.com/photo-1460501501851-d5946a18e552?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const data = [
    { key: 1, location: "Miami", name: "Brandon Centeno", state: "FL" },
    { key: 2, location: "Orlando", name: "Alberto Rivera", state: "FL" },
    {
      key: 3,
      location: "San Franciso",
      name: "Shakira Fulkerson",
      state: "CA",
    },
    {
      key: 4,
      location: "New York City",
      name: "Shakira Fulkerson",
      state: "FL",
    },
  ];

  return (
    <div ref={contactMenuRef}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        padding={5}
      >
        <Container
          maxWidth="sm"
          sx={{ padding: { xs: 2, sm: theme.spacing(3) } }}
        >
          <Paper
            elevation={3}
            sx={{ padding: theme.spacing(2), borderRadius: "12px" }}
          >
            <ImageComponent style={{ maxWidth: "100%" }} />

            <form
              onSubmit={onSubmit}
              name="contact-form"
              data-netlify="true"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact-form"
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
                  label="Month/Date/Year"
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="date"
                    />
                  )} // Add name attribute here
                />

                <TimePicker
                  label="Requested Time"
                  value={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="time"
                    />
                  )} // Add name attribute here
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
                  <InputLabel>Preferred Location</InputLabel>
                  <Select
                    name="Doctor Requested" // Adjusted to a singular form
                    label="Vitamin Package"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    {data.map((data) => (
                      <MenuItem
                        key={data.key}
                        value={data.name}
                      >
                        {data.location}, {data.state} with {data.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box mb={2}>
                <FormControl
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel>Vitamin Package</InputLabel>
                  <Select
                    name="Hydration Bag" // Adjusted to a singular form
                    label="Vitamin Package"
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    {dataArray.map((bag) => (
                      <MenuItem
                        key={bag.title}
                        value={bag.title}
                      >
                        {bag.title}
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
                  name="User Submitted Message:"
                />
              </Box>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  backgroundColor: theme.palette.primary[800],
                  ":hover": {
                    backgroundColor: theme.palette.primary[900],
                  },
                }}
              >
                Send
              </Button>
            </form>
            {status && (
              <Box mt={2}>
                <Alert severity={status === "success" ? "success" : "error"}>
                  {result}
                </Alert>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default Contact;
