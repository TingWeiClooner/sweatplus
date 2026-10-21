// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminLoyalty.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminLoyaltyPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { period: 'Yearly', off: { d: true } }; }
  renderVals() {
    const st = this.state;
    const periods = ['Monthly', 'Yearly'].map((n) => {
      const on = st.period === n;
      return { name: n, bg: on ? '#FFFFFF' : 'transparent', fg: on ? '#5B21B6' : '#4B5563', pick: () => this.setState({ period: n }) };
    });
    const t = (name, bg, fg, spend, topup, park, bday) => ({ name, bg, fg, spend, topup, park, bday, spendAria: name + ' spend threshold', topAria: name + ' top-up package', parkAria: name + ' free parking hours' });
    const tiers = [
      t('Member', '#991B1B', '#FFFFFF', 'RM15 fee', '–', '6', '[Voucher]'),
      t('Silver', '#CBD5E1', '#1E293B', '[RM X]', '[RM X]', '40', '[Voucher]'),
      t('Gold', '#CA8A04', '#1C1917', '[RM X]', '[RM X]', '80', '[Voucher]'),
      t('Platinum', '#4C1D95', '#FFFFFF', '[RM X]', '[RM X]', '100', '[Voucher]')
    ];
    const base = [
      { id: 'a', name: 'RM10 court voucher', where: 'Online bookings' },
      { id: 'b', name: 'RM10 retail voucher', where: 'Xilnex counters' },
      { id: 'c', name: 'Free 1-hour court (off-peak)', where: 'Online bookings' },
      { id: 'd', name: 'Cafe drink voucher', where: 'Xilnex counters' }
    ];
    const rewards = base.map((r) => {
      const off = !!st.off[r.id];
      return Object.assign({}, r, {
        status: off ? 'Inactive' : 'Active', bg: off ? '#F3F4F6' : '#DCFCE7', fg: off ? '#374151' : '#166534',
        toggle: () => { const o = Object.assign({}, st.off); o[r.id] = !off; this.setState({ off: o }); }
      });
    });
    return { periods, tiers, rewards, spendHeader: (st.period === 'Yearly' ? 'YEARLY' : 'MONTHLY') + ' SPEND TO QUALIFY' };
  }

  componentDidMount() { document.title = "Back Office - Loyalty and rewards"; }

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
          <Link to="/admin/members" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Members"}
          </Link>
          <Link to="/admin/loyalty" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
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
            {"Loyalty & rewards settings"}
          </h1>
          <button style={{height: "44px", padding: "0 18px", borderRadius: "10px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
            {"Save changes"}
          </button>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexDirection: "column", gap: "20px"}}>
          <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
            <section style={{flex: "1 1 360px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Earning rules"}
              </h2>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px"}}>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Points per RM1 spent"}
                  <input defaultValue="1" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Daily check-in points"}
                  <input defaultValue="1" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Points expire after"}
                  <select style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
                    <option>
                      {"Never"}
                    </option>
                    <option>
                      {"12 months"}
                    </option>
                    <option>
                      {"24 months"}
                    </option>
                  </select>
                </label>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                  {"Membership fee (RM / year)"}
                  <input defaultValue="15.00" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
              </div>
              <div style={{fontSize: "13px", color: "#374151"}}>
                {"Points are credited after a booking is played or a Xilnex sale syncs, and reversed on refund or void."}
              </div>
            </section>
            <section style={{flex: "1 1 360px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Tier evaluation"}
              </h2>
              <div style={{fontSize: "13px", fontWeight: "700", color: "#374151"}}>
                {"Qualifying spend is counted"}
              </div>
              <div style={{display: "flex", gap: "4px", padding: "4px", background: "#F3F4F6", borderRadius: "12px", alignSelf: "flex-start"}} role="group" aria-label="Evaluation period">
                {(v.periods || []).map((p: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <button onClick={p.pick} style={{height: "40px", padding: "0 18px", borderRadius: "9px", border: "none", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer", background: p.bg, color: p.fg}}>
                      {p.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                {"Tier validity after upgrade"}
                <select style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
                  <option>
                    {"12 months"}
                  </option>
                  <option>
                    {"6 months"}
                  </option>
                </select>
              </label>
              <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
                {"If not requalified at expiry"}
                <select style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
                  <option>
                    {"Move to tier matched by spend"}
                  </option>
                  <option>
                    {"Drop one tier"}
                  </option>
                </select>
              </label>
            </section>
          </div>
          <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
            <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
              {"Tiers"}
            </h2>
            <div style={{overflowX: "auto"}}>
              <table style={{width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px"}}>
                <thead>
                  <tr>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"TIER"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {v.spendHeader}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"TOP-UP PACKAGE (RM)"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"FREE PARKING (HRS)"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"BIRTHDAY VOUCHER"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(v.tiers || []).map((t: any, $index: number) => (
                    <React.Fragment key={$index}>
                      <tr>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          <span style={{padding: "5px 10px", borderRadius: "8px", fontWeight: "800", fontStyle: "italic", background: t.bg, color: t.fg}}>
                            {t.name}
                          </span>
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          <input aria-label={t.spendAria} defaultValue={t.spend} style={{width: "140px", height: "40px", borderRadius: "8px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px"}} />
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          <input aria-label={t.topAria} defaultValue={t.topup} style={{width: "140px", height: "40px", borderRadius: "8px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px"}} />
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          <input aria-label={t.parkAria} defaultValue={t.park} style={{width: "90px", height: "40px", borderRadius: "8px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px"}} />
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          {t.bday}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Rewards catalog"}
              </h2>
              <button style={{height: "44px", padding: "0 16px", borderRadius: "10px", border: "1px solid #6D28D9", background: "#FFFFFF", color: "#5B21B6", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
                {"+ Add reward"}
              </button>
            </div>
            <div style={{overflowX: "auto"}}>
              <table style={{width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px"}}>
                <thead>
                  <tr>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"REWARD"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"USABLE AT"}
                    </th>
                    <th scope="col" style={{textAlign: "right", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"POINTS COST"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"VALIDITY"}
                    </th>
                    <th scope="col" style={{textAlign: "right", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"REDEEMED"}
                    </th>
                    <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                      {"STATUS"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(v.rewards || []).map((r: any, $index: number) => (
                    <React.Fragment key={$index}>
                      <tr>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", fontWeight: "700"}}>
                          {r.name}
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          {r.where}
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", textAlign: "right"}}>
                          {"[X] pts"}
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          {"30 days"}
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", textAlign: "right"}}>
                          {"[n]"}
                        </td>
                        <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                          <button onClick={r.toggle} style={{height: "34px", padding: "0 12px", borderRadius: "17px", font: "inherit", fontSize: "12px", fontWeight: "800", cursor: "pointer", border: "none", background: r.bg, color: r.fg}}>
                            {r.status}
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
    );
  }
}
