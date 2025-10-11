import { useState } from "react";

export function MyForm({ tableRows, setTableRows }) {
  const [date, setDate] = useState("");
  const [totalM, setTotalM] = useState("");
  const [rent, setRent] = useState(300);
  const [medical, setMedical] = useState(200);
  const [savings, setSavings] = useState("");
  const [wifiMobile, setWifiMobile] = useState(29.79);
  const [bus, setBus] = useState(20);
  const [otheru, setOtherU] = useState("");

  const [utilitiesPlan, setUtilitiesPlan] = useState("");
  const [utilitiesSpent, setUtilitiesSpent] = useState("");

  const [foodPlan, setFoodPlan] = useState("");
  const [foodSpent, setFoodSpent] = useState("");

  const [otherpPlan, setOtherPPlan] = useState("");
  const [otherpSpent, setOtherPSpent] = useState("");

  const [goboxPlan, setGoboxPlan] = useState("");
  const [goboxSpent, setGoboxSpent] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      date,
      totalM,
      rent,
      medical,
      savings,
      utilitiesPlan,
      utilitiesSpent,
      foodPlan,
      foodSpent,
      wifiMobile,
      bus,
      goboxPlan,
      goboxSpent,
      otherpPlan,
      otherpSpent,
      otheru,
      leftPlan: Number(totalM) - (Number(rent) + Number(medical) + Number(savings) + Number(utilitiesPlan) + Number(foodPlan) + Number(wifiMobile) + Number(bus) + Number(goboxPlan) + Number(otherpPlan)),

      leftSpent: Number(totalM) - (Number(rent) + Number(medical) + Number(savings) + Number(utilitiesSpent) + Number(foodSpent) + Number(wifiMobile) + Number(bus) + Number(goboxSpent) + Number(otherpSpent) + Number(otheru))
    };


    const updatedRows = [...tableRows, newRow];

    setTableRows(updatedRows);

    localStorage.setItem("budgetData", JSON.stringify(updatedRows));

    setDate("");
    setTotalM("");
    setRent(300);
    setMedical(200);
    setSavings("");
    setUtilitiesPlan("");
    setUtilitiesSpent("");
    setFoodSpent("");
    setFoodPlan("");
    setWifiMobile(29.79);
    setBus(20);
    setGoboxPlan("");
    setGoboxSpent("");
    setOtherPPlan("");
    setOtherPSpent("");
    setOtherU("");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="formHeader">
        <div className="positHeader">
          <h1>Plan</h1>
          <div className="divider"></div>
          <h1>Spent</h1>
        </div>
      </div>

      <label><h4>Date</h4></label>
      <div className="inputContainer">
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <label><h4>Total Money</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={totalM}
          onChange={(e) => setTotalM(Number(e.target.value))}
        />
      </div>

      <label><h4>Rent</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Medical</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={medical}
          onChange={(e) => setMedical(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Savings</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
        />
      </div>

      <label><h4>Utilities</h4></label>
      <div className="inputContainer">
        <input
          className="smaller-width"
          type="number"
          value={utilitiesPlan}
          onChange={(e) => setUtilitiesPlan(Number(e.target.value))}
        />
        <input
          className="smaller-width right"
          type="number"
          value={utilitiesSpent}
          onChange={(e) => setUtilitiesSpent(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Food</h4></label>
      <div className="inputContainer">
        <input
          className="smaller-width"
          type="number"
          value={foodPlan}
          onChange={(e) => setFoodPlan(Number(e.target.value))}
        />
        <input
          className="smaller-width right"
          type="number"
          value={foodSpent}
          onChange={(e) => setFoodSpent(Number(e.target.value))}
        />
      </div>

      <label><h4>Internet</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={wifiMobile}
          onChange={(e) => setWifiMobile(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Bus</h4></label>
      <div className="inputContainer">
        <input
          className="full-width"
          type="number"
          value={bus}
          onChange={(e) => setBus(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Gobox</h4></label>
      <div className="inputContainer">
        <input
          className="smaller-width"
          type="number"
          value={goboxPlan}
          onChange={(e) => setGoboxPlan(Number(e.target.value))}
        />
        <input
          className="smaller-width right"
          type="number"
          value={goboxSpent}
          onChange={(e) => setGoboxSpent(Number(e.target.value))}
        />
      </div>
      
      <label><h4>Other (Planned)</h4></label>
      <div className="inputContainer">
        <input
          className="smaller-width"
          type="number"
          value={otherpPlan}
          onChange={(e) => setOtherPPlan(Number(e.target.value))}
        />
        <input
          className="smaller-width right"
          type="number"
          value={otherpSpent}
          onChange={(e) => setOtherPSpent(Number(e.target.value))}
        />
      </div>

      <label><h4>Other (Unplanned)</h4></label>
      <div className="inputContainer">
        <input
          className="smaller-width right"
          type="number"
          value={otheru}
          onChange={(e) => setOtherU(Number(e.target.value))}
        />
      </div>
      
      <button className="button" type="submit">Submit</button>
    </form>
  );
}

  export function Create({ tableRows, setTableRows }) {
  return (
    <div>
      <MyForm tableRows={tableRows} setTableRows={setTableRows} />
    </div>
  );
}