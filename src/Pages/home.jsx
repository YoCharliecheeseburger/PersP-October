import { Plan } from "../Pages/plan"
import { Spent } from "../Pages/spent"

export function Home({ tableRows }) {
  return (
    <div className="tablePosHome">
      <div className="tableBox">
        <Plan tableRows={tableRows}/>
        <h1>Plan Chart</h1>
      </div>
      <div className="tableBox">
        <Spent tableRows={tableRows}/>
        <h1>Spent Chart</h1>
      </div>
    </div>
  );
}
