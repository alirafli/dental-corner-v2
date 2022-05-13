import React from "react";
import { Header, Paragraph, PrimaryCard } from "../../components";

const Article = () => {
  return (
    <div className="mt-40 ml-1 mb-5 px-7">
      <div className="">
        <Header className="font-black text-4xl mb-10 text-center" h3>
          Article
        </Header>
        <div className="px-40">
          <div className="grid grid-cols-4 gap-x-30 gap-y-35">
            <div>
              <PrimaryCard
                date="21 April 2022"
                title="Get 50% Discount for Scaling"
              ></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
            <div>
              <PrimaryCard></PrimaryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
