export function Spent({tableRows}) {
  return (
    <>
    <div className="tablePos">
      <div className="horizontal-scroll">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Money</th>
              <th>Rent</th>
              <th>Medical</th>
              <th>Savings</th>
              <th>Utilities</th>
              <th>Food</th>
              <th>WIFI & Mobile</th>
              <th>Bus</th>
              <th>Gobox</th>
              <th>Other (Planned)</th>
              <th>Other (Unplanned)</th>
              <th>Left</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.totalM}</td>
                <td>{row.rent}</td>
                <td>{row.medical}</td>
                <td>{row.savings}</td>
                <td>{row.utilitiesSpent}</td>
                <td>{row.foodPlan}</td>
                <td>{row.wifiMobile}</td>
                <td>{row.bus}</td>
                <td>{row.goboxSpent}</td>
                <td>{row.otherpSpent}</td>
                <td>{row.otheru}</td>
                <td>{row.leftSpent.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
