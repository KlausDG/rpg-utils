import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "@mui/material";

import * as Styled from "./App.styles";

function App() {
  const [text, setText] = useState("");

  const maxLength = 300;

  const handleClick = async (text) => {
    navigator.clipboard.writeText(text);
    toast("Texto copiado com sucesso!");
  };

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="App">
      <Styled.Main>
        <Styled.Card elevation={5}>
          <Styled.TextField
            id="outlined-multiline-flexible"
            multiline
            rows={6}
            onChange={(event) => handleChange(event.target.value)}
            inputProps={{ maxLength }}
            helperText={
              <Styled.HelperText style={{ textAlign: "right" }}>
                {`${text.length} / ${maxLength}`}
              </Styled.HelperText>
            }
          />
          <Button
            variant="contained"
            onClick={() => handleClick(text)}
            disabled={!text.length}
          >
            Copiar
          </Button>
        </Styled.Card>
      </Styled.Main>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
