/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from "polished";
import { jsx, Box, Container } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import PieChart from "components/icons/pie-chart";
import Cog from "components/icons/cog";
import Currency from "components/icons/currency";
import Briefcase from "components/icons/briefcase";
import TabButton from "components/tabs/tab-button";

import taskManager from "assets/images/task-manager.png";

const data = [
  {
    id: 1,
    title: "جزء مخصص للزبائن",
    icon: <PieChart />,
    image: taskManager,
  },
  {
    id: 2,
    title: "جزء مخصص للأدمن",
    icon: <Cog />,
    image: taskManager,
  },
];

const Dashboard = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="من واش يتكون المتجر الإلكتروني تاعنا"
          description="يتكون المتجر الإلكتروني تاعنا من جزء خاص بالزبائن و هو الموقع الإلكتروني اللي يكمونديو منو السلعة و جزء خاص بيك أنت كأدمن باش تسير الموقع بطريقة سهلة أما أمور الهوستينق و صيانة الموقع و التحديثات حنا نستكلفو بكلش هذا قاع بلا كارا فيزا"
        />
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              <Image src={tab.image} alt={tab.title} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba("#7141F8", 0.03),
    pt: [8, null, null, 12],
    pb: [6, null, null, null, 12],
  },
  heading: {
    marginBottom: [6, null, null, 12],
    maxWidth: ["none", null, null, 565, null, "none"],
    p: {
      color: rgba("#02073E", 0.7),
      maxWidth: 445,
    },
  },
  dashboardTabs: {
    border: 0,
    ".rc-tabs-nav-wrap": {
      justifyContent: "center",
      marginBottom: 8,
      overflow: "unset",
    },
    ".rc-tabs-ink-bar": {
      display: "none",
    },
    ".rc-tabs-tabpane, .rc-tabs-tab-btn": {
      outline: 0,
    },
    ".rc-tabs-nav-list": {
      flexWrap: ["wrap", null, null, "unset"],
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      ":nth-of-type(1),:nth-of-type(2)": {
        mb: [4, null, null, 0],
      },
      ":nth-of-type(2)": {
        ml: [4, null, null, 0],
      },
      ":nth-of-type(4)": {
        ml: [2, null, null, 0],
      },
      "+ .rc-tabs-tab": {
        ml: [null, null, null, 4, 8],
      },
    },
    ".rc-tabs-tab-active": {
      backgroundColor: "white",
      fontWeight: [400, null, null, 500],
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      padding: ["10px 10px", null, null, "10px 18px"],
    },
  },
};
