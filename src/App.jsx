import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The wild oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button
              type="button"
              variation="primary"
              size="medium"
              onClick={() => alert("you are check in")}
            >
              Check In
            </Button>
            <Button
              type="button"
              variation="secondary"
              size="small"
              onClick={() => alert("you are check out")}
            >
              Check Out
            </Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading as="h3">Forms</Heading>
          <form>
            <Input type="number" placeholder="Number of guests..." />
          </form>
        </Row>
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
