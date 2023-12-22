import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import List from "../List";




const Dasinfo = () => {
  return (
    <div className="mt-5">
       <Tabs>
        <TabList>
          <Tab>List</Tab>
        
          <Tab>On Go In</Tab>
          <Tab>Complate</Tab>

        </TabList>

        <TabPanel>
        <List></List>
        </TabPanel>
       
        <TabPanel>
      
        </TabPanel>
        <TabPanel>

        </TabPanel>
        
      </Tabs>
     
    </div>
  );
};

export default Dasinfo;