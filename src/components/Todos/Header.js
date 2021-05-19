import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';

function TabPanel(props) {
    const { children, value, index, } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`a11y-tabpanel-${index}`}
            aria-labelledby={`a11y-tab-${index}`}>
            {value === index && (
                <Typography>{children}</Typography>
            )} || {}
        </div>
    );
}

const Header = () => {
    const [value, setValue] = useState(0);
    return (
        <Tabs
            value={value}
            onChange={(evt, newValue) => setValue(newValue)}
            style={{ backgroundColor: "#f5f5f5" }}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="TODOs" />
            <Tab label="Done" />

            <TabPanel value={value} index={2} >
                Secrets! ! !
            </TabPanel>

        </Tabs>
    );
};

export default Header;