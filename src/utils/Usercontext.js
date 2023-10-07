import { createContext } from "react";

const Usercontext = createContext({
  user: {
    name: "dummy name",
    email: "dummy@gmail.com",
  },
});

export default Usercontext;
