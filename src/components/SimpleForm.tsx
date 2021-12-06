import { Heading, Textarea } from "@chakra-ui/react";
import * as React from "react";

export default ({
  title,
  fn
}: {
  title: string;
  fn: (arg0: string) => number;
}) => {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Heading color="gray.600" mt="5">
        {title}
      </Heading>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Input here"
        size="md"
        rows={5}
      />
      <Heading color="gray.600" mt="5">
        Result: {fn(value)}
      </Heading>
    </>
  );
};
