import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;


const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`

function App() {
  return (
      <>
        <GlobalStyles />
        <StyledApp>
          <H1>The wild oasis</H1>
          <Button type="button" onClick={() => alert("you are check in")}>
            Check In
          </Button>
          <Button type="button" onClick={() => alert("you are check out")}>
            Check Out
          </Button>
          <Input type="number" placeholder="Number of guests..."/>
        </StyledApp>
      </>

  );
}

export default App;

// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//
// import GlobalStyles from "./styles/GlobalStyles";
// import Dashboard from "./pages/Dashboard";
// import Bookings from "./pages/Bookings";
// import Cabins from "./pages/Cabins";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
// import Account from "./pages/Account";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./ui/AppLayout";
//
// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <BrowserRouter>
//         <Routes>
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate replace to="dashboard" />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="bookings" element={<Bookings />} />
//             <Route path="cabins" element={<Cabins />} />
//             <Route path="users" element={<Users />} />
//             <Route path="settings" element={<Settings />} />
//             <Route path="account" element={<Account />} />
//           </Route>
//
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
//
// export default App;
