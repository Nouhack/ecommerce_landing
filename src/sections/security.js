/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import privacy from "assets/images/privacy.png";

const Security = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={privacy} alt="privacy" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="تخايل معايا يكون عندك متجر إلكتروني خاص فيك ,تدير فيه السلعة تاعك"
            description="نقدمولك اليوم متجر إلكتروني راح يلبي كل إحتياجاتك , يعطيك الإمكانية باش تزيد و تحذف السلع المعروضة بكل بساطة و ببواجهة عصرية و زيد الزبائن تاوعك ماشي لازم يفتحوا حساب باش يشريو مالمتجر تاعك هذا باش نحققوا معادلة كل ما تسهال = كل ما زادوا الطلبات ."
            learnMore="الشرح بالصور راح يكون أسفل "
          />
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    alignItems: "center",
    gap: [null, null, null, 6, 14],
    flexDirection: ["column-reverse", null, null, "unset"],
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "1fr 2fr"],
  },
  heading: {
    fontFamily: "'Noto Sans Arabic', sans-serif",
    fontWeight: "bold",
    textAlign: ["center", null, null, "right"],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
      fontFamily: "'Noto Sans Arabic', sans-serif",
    },
  },
  illustration: {
    alignItems: "center",
    mt: [8, null, 0],
  },
};
