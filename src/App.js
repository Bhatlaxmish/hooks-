import React, {Suspense}from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Allquotes from './pages/Allquotes';
import Quotedetails from './pages/Quotedetails';
// import Newquote from './pages/Newquote';
import Layout from './components/layout/Layout';
import NOtfound from './pages/NOtfound';
const Newquote =React.lazy(()=>import ('./pages/Newquote'));/* lazy loading is that it downloads the code only 
                            its clicked or visited  */
function App() {
  return (

    <Layout>
      <Suspense fallback={<div> loading ..</div>}>
   <Switch>

<Route path="/" exact>
  <Redirect to ="/quotes"></Redirect>
</Route>
    <Route path='/quotes'>
<Allquotes/>
    </Route>
    <Route path='/quotes/:quoteId'>
<Quotedetails></Quotedetails>
    </Route>
    <Route path='/new-quotes'>
<Newquote></Newquote>
    </Route>
    <Route path='*'>
      <NOtfound/>
    </Route>
   </Switch>
   </Suspense>

   </Layout>
  );
}

export default App;
/* in vertion 6 
Switch changes to Routes and we pass child component to Route via element 

<Routes>
<Route path=" "  element={<Welcome/>}><Route/>
<Routes/>
Link and Navlink are same but activeclassname changes to className 
nested Route also must be enclosed by 'Routes' the path given will be remaining path not the entire path 
Redirect changes to Navigate if you want to push element just write Navigate else if you want to replace
then write replace 
<Navigate replace to=''/>
useHistory changes to useNavigate
const navigate=useNavigate();
navigate('/welcome',{replace:true});
or you can write navigate(-1) or -2 to go to previous page or 1 to go forword

no <Prompt/ >exits 

*/