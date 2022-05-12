import { Link } from "react-router-dom";
import { Paragraph, Header, Button } from "../";
import DUMMY from "../../assets/img/dummyImage.jpg";

export const PrimaryCard = ({
  linkTo = "/",
  image = DUMMY,
  alt = "default",
  date = "your date",
  title = "your title",
}) => {
  return (
    <div className="container drop-shadow-lg bg-white w-52 max-w-card p-5 rounded-md m-2">
      <div>
        <div
          className="bg-cover bg-center w-52 h-36 rounded-lg mb-2 mx-auto"
          style={{ backgroundImage: `url(${DUMMY})` }}
        />
      </div>
      <div>
        <Paragraph b1 className="text-gray" bold>
          {date}
        </Paragraph>
        <Header h7 bold truncate>
          {title}
        </Header>
      </div>
    </div>
  );
};

export const SecondaryCard = ({
  title = "your title",
  content = "your content",
  btnContent = "button content",
}) => {
  return (
    <div className="container drop-shadow-lg bg-white w-52 max-w-card p-5 rounded-md m-2">
      <div className="mb-2">
        <Header h6 bold>
          {title}
        </Header>
      </div>
      <Paragraph h7 medium>
        {content}
      </Paragraph>
      <div className="text-center mt-24">
        <Button bold>{btnContent}</Button>
      </div>
    </div>
  );
};
