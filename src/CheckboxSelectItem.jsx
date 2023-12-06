import React, { useState } from "react";
const frameworks = ["react", "angular", "vue", "nodejs"];
export default function CheckboxSelectItem() {
  const [isIndian, setIsIndian] = useState(false);
  const [framework, setFramework] = useState("vue");
  const handleChecked = (e) => {
    setIsIndian(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <form>
      <div className="form-row">
        <label className="form-label">Is Indian</label>
        <input
          type="checkbox"
          name="isIndian"
          id="isIndian"
          checked={isIndian}
          onChange={handleChecked}
        />
      </div>
      <div className="form-row">
        <select
          name="framework"
          id="framework"
          value={framework}
          onChange={handleFramework}
        >
          {frameworks.map((framework) => {
            return <option key={framework}>{framework}</option>;
          })}
        </select>
      </div>
    </form>
  );
}
