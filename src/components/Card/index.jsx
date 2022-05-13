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
          className="bg-cover bg-center w-52 h-36 rounded-lg mb-6 mx-auto"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div>
        <Paragraph b1 className="text-gray">
          {date}
        </Paragraph>
        <div className="mt-2">
          <Header h7 bold customStyle="text-left">
            {title}
          </Header>
        </div>
      </div>
    </div>
  );
};

export const SecondaryCard = ({
  title = "your title",
  content = "your content",
  btnContent = "button content",
  extra = [],
}) => {
  return (
    <div className="container drop-shadow-lg bg-white w-52 max-w-card p-5 rounded-md m-2 pb-32 mr-10">
      <div className="mb-5">
        <Header h6 bold>
          {title}
        </Header>
      </div>
      <Paragraph h7 medium>
        {content}
        <ul class="list-disc ml-4 mt-3">
          {extra.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </Paragraph>
      <div className="text-center mt-24 absolute bottom-10 left-0 right-0">
        <Button bold>{btnContent}</Button>
      </div>
    </div>
  );
};
