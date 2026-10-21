// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminDashboard.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminDashboardPage extends React.Component<any, any> {

  renderVals() {
    const src = {
      Online: ['#EDE9FE', '#5B21B6'], 'Walk-in': ['#FFEDD5', '#9A3412'], Season: ['#CFFAFE', '#155E75'], Phone: ['#E0E7FF', '#3730A3']
    };
    const rows = [
      ['4:00 PM', 'G1 · Badminton', '[Customer]', 'Online', 'Wallet'],
      ['5:00 PM', 'G2 · Badminton', '[Customer]', 'Season', 'Paid upfront'],
      ['5:00 PM', 'G4 · Badminton', '[Walk-in]', 'Walk-in', 'Cash · ref [no.]'],
      ['6:00 PM', 'F1 · Futsal', '[Customer]', 'Phone', 'Fiuu link · unpaid'],
      ['7:00 PM', 'G3 · Badminton', '[Customer]', 'Online', 'Fiuu'],
      ['8:00 PM', 'P1 · Pickleball', '[Customer]', 'Online', 'Wallet']
    ];
    return {
      kpis: [
        { label: "Today's bookings", value: '[n]', note: 'All venues' },
        { label: 'Court utilisation', value: '[n]%', note: 'Today, open hours' },
        { label: 'Sales today', value: 'RM [x]', note: 'Online + counter' },
        { label: 'New members', value: '[n]', note: 'This month' },
        { label: 'Points liability', value: '[n] pts', note: 'Outstanding balance' },
        { label: 'Wallet liability', value: 'RM [x]', note: 'Customer credit held' }
      ],
      today: rows.map((r) => ({
        time: r[0], court: r[1], who: r[2], src: r[3], pay: r[4],
        srcBg: src[r[3]][0], srcFg: src[r[3]][1],
        payFg: r[4].indexOf('unpaid') >= 0 ? '#B91C1C' : '#374151'
      }))
    };
  }

  componentDidMount() { document.title = "Back Office - Dashboard"; }

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
          <Link to="/admin" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
            {"Dashboard"}
          </Link>
          <Link to="/admin/bookings" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Bookings & walk-ins"}
          </Link>
          <Link to="/admin/members" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
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
            {"Dashboard"}
          </h1>
          <label style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "700", color: "#4B5563"}}>
            {"Venue "}
            <select style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", color: "#111827", background: "#FFFFFF"}}>
              <option>
                {"All venues"}
              </option>
              <option>
                {"Sports Arena Sentosa"}
              </option>
              <option>
                {"[Venue 2]"}
              </option>
            </select>
          </label>
          <Link to="/admin/bookings" style={{height: "44px", padding: "0 16px", borderRadius: "10px", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center"}}>
            {"+ Walk-in booking"}
          </Link>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexDirection: "column", gap: "20px"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px"}}>
            {(v.kpis || []).map((k: any, $index: number) => (
              <React.Fragment key={$index}>
                <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "6px"}}>
                  <span style={{fontSize: "13px", fontWeight: "700", color: "#4B5563"}}>
                    {k.label}
                  </span>
                  <span style={{fontSize: "28px", fontWeight: "800"}}>
                    {k.value}
                  </span>
                  <span style={{fontSize: "12px", color: "#4B5563"}}>
                    {k.note}
                  </span>
                </section>
              </React.Fragment>
            ))}
          </div>
          <div style={{display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
            <section style={{flex: "2 1 520px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                  {"Today's bookings"}
                </h2>
                <Link to="/admin/bookings" style={{fontWeight: "700", fontSize: "14px", padding: "10px 0"}}>
                  {"Open calendar"}
                </Link>
              </div>
              <div style={{overflowX: "auto"}}>
                <table style={{width: "100%", minWidth: "560px", borderCollapse: "collapse", fontSize: "14px"}}>
                  <thead>
                    <tr>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"TIME"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"COURT"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"CUSTOMER"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"SOURCE"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"PAYMENT"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(v.today || []).map((t: any, $index: number) => (
                      <React.Fragment key={$index}>
                        <tr>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", fontWeight: "700"}}>
                            {t.time}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            {t.court}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            {t.who}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            <span style={{padding: "3px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", background: t.srcBg, color: t.srcFg}}>
                              {t.src}
                            </span>
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", fontWeight: "600", color: t.payFg}}>
                            {t.pay}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <div style={{flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "20px"}}>
              <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                  {"Xilnex sync"}
                </h2>
                <div style={{display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", color: "#166534"}}>
                  <span style={{width: "10px", height: "10px", borderRadius: "5px", background: "#16A34A"}}></span>
                  {"Running"}
                </div>
                <div style={{fontSize: "14px", color: "#374151"}}>
                  {"Last sync [hh:mm] \u00b7 [n] member sales imported \u00b7 [n] points credited"}
                </div>
                <div style={{fontSize: "14px", color: "#374151"}}>
                  {"Errors: 0 \u00b7 "}
                  <Link to="/admin/members" style={{fontWeight: "700"}}>
                    {"View sync log"}
                  </Link>
                </div>
              </section>
              <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                  {"Needs attention"}
                </h2>
                <Link to="/admin/bookings" style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", borderRadius: "10px", background: "#FFF7ED", color: "#9A3412", fontWeight: "700", fontSize: "14px"}}>
                  <span>
                    {"Venue requests to follow up"}
                  </span>
                  <span>
                    {"[n]"}
                  </span>
                </Link>
                <Link to="/admin/bookings" style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", borderRadius: "10px", background: "#EFF6FF", color: "#1E40AF", fontWeight: "700", fontSize: "14px"}}>
                  <span>
                    {"Unpaid payment links"}
                  </span>
                  <span>
                    {"[n]"}
                  </span>
                </Link>
                <Link to="/admin/members" style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", borderRadius: "10px", background: "#F5F3FF", color: "#5B21B6", fontWeight: "700", fontSize: "14px"}}>
                  <span>
                    {"Tiers expiring this month"}
                  </span>
                  <span>
                    {"[n]"}
                  </span>
                </Link>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
    );
  }
}
