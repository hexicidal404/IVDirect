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
} from "@mui/material";

function Forms({ dataArray }) {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleChange = (event) => {
    setSelectedRoles(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input
          type="hidden"
          name="form-name"
          value="name_of_my_form"
        />

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
            <InputLabel>Your Role</InputLabel>
            <Select
              multiple
              name="role[]"
              label="Your Role"
              value={selectedRoles}
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
            label="Message"
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
    </Container>
  );
}

export default Forms;
