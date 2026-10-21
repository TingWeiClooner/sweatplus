// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminMembers.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminMembersPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { sel: 0 }; }
  renderVals() {
    const tc = { Fan: ['#F3F4F6', '#374151'], Member: ['#991B1B', '#FFFFFF'], Silver: ['#CBD5E1', '#1E293B'], Gold: ['#CA8A04', '#1C1917'], Platinum: ['#4C1D95', '#FFFFFF'] };
    const raw = [
      ['[Member A]', '012-345 6789', 'Member', '2,681', 'RM 1,480.00', 'RM [x]', '[dd/mm/yyyy]'],
      ['[Member B]', '016-222 1100', 'Gold', '[n]', 'RM [x]', 'RM [x]', '[dd/mm/yyyy]'],
      ['[Member C]', '017-880 4321', 'Silver', '[n]', 'RM [x]', 'RM [x]', '[dd/mm/yyyy]'],
      ['[Member D]', '011-5566 7788', 'Fan', '[n]', 'RM 0.00', 'RM [x]', '–'],
      ['[Member E]', '019-301 2244', 'Platinum', '[n]', 'RM [x]', 'RM [x]', '[dd/mm/yyyy]'],
      ['[Member F]', '012-777 9090', 'Member', '[n]', 'RM [x]', 'RM [x]', '[dd/mm/yyyy]'],
      ['[Member G]', '013-404 5050', 'Fan', '[n]', 'RM 0.00', 'RM [x]', '–'],
      ['[Member H]', '018-650 1212', 'Silver', '[n]', 'RM [x]', 'RM [x]', '[dd/mm/yyyy]']
    ];
    const members = raw.map((r, i) => ({
      name: r[0], phone: r[1], tier: r[2], pts: r[3], wallet: r[4], spend: r[5], exp: r[6],
      tierBg: tc[r[2]][0], tierFg: tc[r[2]][1],
      rowBg: this.state.sel === i ? '#F5F3FF' : '#FFFFFF',
      pick: () => this.setState({ sel: i })
    }));
    return { members, sel: members[this.state.sel] };
  }

  componentDidMount() { document.title = "Back Office - Members"; }

  render() {
    const v: any = this.renderVals ? this.renderVals() : {};
    return (
    <div style={{fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: "#0F172A", background: "#F4F4F8", minHeight: "100vh", display: "flex", flexWrap: "wrap"}}>
      <aside style={{flex: "1 1 240px", maxWidth: "100%", background: "#111827", color: "#E5E7EB", padding: "20px 14px", display: "flex", flexDirection: "column", gap: "6px", boxSizing: "border-box"}}>
        <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "6px 8px 18px"}}>
          <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "#8E2A8B", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "10px", lineHeight: "1.05"}}>
            {"sweat"}
            <br />
            {"plus"}
          </div>
          <div>
            <div style={{fontWeight: "800", fontSize: "16px", color: "#FFFFFF"}}>
              {"SweatPlus"}
            </div>
            <div style={{fontSize: "12px", color: "#9CA3AF"}}>
              {"Back office"}
            </div>
          </div>
        </div>
        <nav aria-label="Back office" style={{display: "flex", flexDirection: "column", gap: "4px"}}>
          <Link to="/admin" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Dashboard"}
          </Link>
          <Link to="/admin/bookings" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Bookings & walk-ins"}
          </Link>
          <Link to="/admin/members" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
            {"Members"}
          </Link>
          <Link to="/admin/loyalty" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Loyalty & rewards"}
          </Link>
          <Link to="/admin/pricing" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Venues & pricing"}
          </Link>
          <Link to="/admin/staff" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Staff & roles"}
          </Link>
          <Link to="/admin" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Reports"}
          </Link>
        </nav>
        <div style={{marginTop: "auto", padding: "14px 8px 0", borderTop: "1px solid #1F2937", fontSize: "13px", color: "#9CA3AF"}}>
          {"[Admin name]"}
          <br />
          {"Super Admin"}
        </div>
      </aside>
      <div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column"}}>
        <div style={{background: "#FFFFFF", borderBottom: "1px solid #E5E7EB", padding: "14px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px"}}>
          <h1 style={{margin: "0", fontSize: "22px", fontWeight: "800", flex: "1 1 auto"}}>
            {"Members"}
          </h1>
          <label style={{display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 12px", borderRadius: "10px", border: "1px solid #D1D5DB", background: "#FFFFFF", minWidth: "260px"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M20 20l-3.5-3.5"></path>
            </svg>
            <span style={{position: "absolute", left: "-9999px"}}>
              {"Search members"}
            </span>
            <input placeholder="Name, phone or member ID" style={{border: "none", outline: "none", font: "inherit", fontSize: "14px", flex: "1"}} />
          </label>
          <select aria-label="Tier" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
            <option>
              {"All tiers"}
            </option>
            <option>
              {"Fan"}
            </option>
            <option>
              {"Member"}
            </option>
            <option>
              {"Silver"}
            </option>
            <option>
              {"Gold"}
            </option>
            <option>
              {"Platinum"}
            </option>
          </select>
          <button style={{height: "44px", padding: "0 16px", borderRadius: "10px", border: "1px solid #D1D5DB", background: "#FFFFFF", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer"}}>
            {"Export Excel"}
          </button>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
          <section style={{flex: "999 1 560px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "8px 8px 12px", overflowX: "auto"}}>
            <table style={{width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px"}}>
              <thead>
                <tr>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"MEMBER"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"PHONE"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"TIER"}
                  </th>
                  <th scope="col" style={{textAlign: "right", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"POINTS"}
                  </th>
                  <th scope="col" style={{textAlign: "right", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"WALLET"}
                  </th>
                  <th scope="col" style={{textAlign: "right", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"SPEND (PERIOD)"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"TIER EXPIRES"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(v.members || []).map((m: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <tr style={{background: m.rowBg}}>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        <button onClick={m.pick} style={{border: "none", background: "none", padding: "0", font: "inherit", fontWeight: "800", color: "#5B21B6", cursor: "pointer", minHeight: "32px"}}>
                          {m.name}
                        </button>
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        {m.phone}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        <span style={{padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "800", background: m.tierBg, color: m.tierFg}}>
                          {m.tier}
                        </span>
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6", textAlign: "right", fontWeight: "700"}}>
                        {m.pts}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6", textAlign: "right"}}>
                        {m.wallet}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6", textAlign: "right"}}>
                        {m.spend}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        {m.exp}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </section>
          <aside style={{flex: "1 1 320px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px"}}>
              <div>
                <h2 style={{margin: "0", fontSize: "18px", fontWeight: "800"}}>
                  {v.sel.name}
                </h2>
                <div style={{fontSize: "13px", color: "#4B5563"}}>
                  {v.sel.phone}{" \u00b7 ID [SP-000000]"}
                </div>
              </div>
              <span style={{padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "800", background: v.sel.tierBg, color: v.sel.tierFg}}>
                {v.sel.tier}
              </span>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px"}}>
              <div style={{padding: "12px", borderRadius: "10px", background: "#F9FAFB"}}>
                <div style={{fontSize: "12px", color: "#4B5563", fontWeight: "700"}}>
                  {"POINTS"}
                </div>
                <div style={{fontSize: "20px", fontWeight: "800"}}>
                  {v.sel.pts}
                </div>
              </div>
              <div style={{padding: "12px", borderRadius: "10px", background: "#F9FAFB"}}>
                <div style={{fontSize: "12px", color: "#4B5563", fontWeight: "700"}}>
                  {"WALLET"}
                </div>
                <div style={{fontSize: "20px", fontWeight: "800"}}>
                  {v.sel.wallet}
                </div>
              </div>
            </div>
            <div style={{fontSize: "13px", color: "#374151"}}>
              {"Xilnex customer record: linked \u00b7 last sale synced [dd/mm hh:mm]"}
            </div>
            <div style={{borderTop: "1px solid #F3F4F6", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "10px"}}>
              <div style={{fontWeight: "800", fontSize: "15px"}}>
                {"Adjust points"}
              </div>
              <div style={{display: "flex", gap: "8px"}}>
                <label style={{flex: "1", display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Points (+/-)"}
                  <input defaultValue="+50" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
                <label style={{flex: "2", display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Reason (required)"}
                  <input placeholder="e.g. Missing receipt" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
              </div>
              <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                {"Override tier "}
                <select style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
                  <option>
                    {"No change"}
                  </option>
                  <option>
                    {"Member"}
                  </option>
                  <option>
                    {"Silver"}
                  </option>
                  <option>
                    {"Gold"}
                  </option>
                  <option>
                    {"Platinum"}
                  </option>
                </select>
              </label>
              <button style={{height: "46px", borderRadius: "12px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "15px", cursor: "pointer"}}>
                {"Save adjustment"}
              </button>
              <div style={{fontSize: "12px", color: "#4B5563"}}>
                {"Every adjustment is recorded in the audit log with your name and reason."}
              </div>
            </div>
            <div style={{borderTop: "1px solid #F3F4F6", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px"}}>
              <div style={{fontWeight: "800", fontSize: "15px"}}>
                {"Recent activity"}
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>
                  {"Counter purchase (Xilnex)"}
                </span>
                <span style={{fontWeight: "700", color: "#5B21B6"}}>
                  {"+35 pts"}
                </span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>
                  {"Wallet top-up (Fiuu)"}
                </span>
                <span style={{fontWeight: "700"}}>
                  {"+RM 500.00"}
                </span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>
                  {"Redeemed RM10 court voucher"}
                </span>
                <span style={{fontWeight: "700", color: "#5B21B6"}}>
                  {"- [X] pts"}
                </span>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
    );
  }
}
