import CounterItem from "./CounterItem";
import { DefineAdSlot, DefineOutOfPageAdSlot, RequestAds } from "../utils/google-publisher-tag.jsx";

const CounterList = () => {
  const currentPath = window.location.pathname;
  return (
    <section className="self-center mt-2.5 w-full font-semibold">
      <DefineAdSlot
        size={[300, 250]}
        adUnit={"/6355419/Travel/Europe/France/Paris"}
      />
      <RequestAds/>
      <DefineOutOfPageAdSlot
        adUnit={"/6355419/Travel"}
        format={"BOTTOM_ANCHOR"}
        targeting={[["test", "anchor"]]}
        key={"counter-out-of-page-ad"}
      />
      <DefineOutOfPageAdSlot
        adUnit={"/6355419/Travel/Europe/France/Paris"}
        format={"INTERSTITIAL"}
        key={"daily-interstitial-ad"}
      />
      
      <a href={`${currentPath}/count?title=BC%20Daily%20Rbx%20Counter`}>
        <CounterItem title="BC Robox Counter"/>
      </a>
      
      <div className="mt-4">
        <a href={`${currentPath}/count?title=TBC%20Daily%20Rbx%20Counter`}>
          <CounterItem title="TBC Robox Counter"/>
        </a>
      </div>
      
      <div className="mt-4">
        <a href={`${currentPath}/count?title=OBC%20Daily%20Rbx%20Counter`}>
          <CounterItem title="OBC Robox Counter"/>
        </a>
      </div>
    </section>
  );
};

export default CounterList;
