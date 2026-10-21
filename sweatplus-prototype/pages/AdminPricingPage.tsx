// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminPricing.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminPricingPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { v: 0 }; }
  renderVals() {
    const names = ['Sports Arena Sentosa', '[Venue 2]', '[Venue 3]', '[Venue 4]', '[Venue 5]', '[Venue 6 · opening 2027]'];
    const venues = names.map((n, i) => {
      const on = this.state.v === i;
      return { name: n, meta: i === 5 ? 'Draft · hidden from app' : '[n] courts', bg: on ? '#F5F3FF' : '#FFFFFF', border: on ? '2px solid #6D28D9' : '1px solid #E5E7EB', pick: () => this.setState({ v: i }) };
    });
    const c = (name, sport, status) => ({ name, sport, status, bg: status === 'Active' ? '#DCFCE7' : '#FEF3C7', fg: status === 'Active' ? '#166534' : '#92400E' });
    const courts = [c('Court G1', 'Badminton', 'Active'), c('Court G2', 'Badminton', 'Active'), c('Court G3', 'Badminton', 'Closed · maintenance'), c('Court G4', 'Badminton', 'Active'), c('Court F1', 'Futsal', 'Active'), c('Court P1', 'Pickleball', 'Active')];
    const b = (band, days, pub, mem) => ({ band, days, pub, mem, pubAria: band + ' ' + days + ' public price', memAria: band + ' ' + days + ' member price' });
    const bands = [b('Off-peak 7 AM – 5 PM', 'Mon – Fri', '[RM X]', '[RM X]'), b('Peak 5 PM – 12 AM', 'Mon – Fri', '[RM X]', '20.00'), b('All day', 'Sat, Sun', '[RM X]', '[RM X]'), b('All day', 'Public holidays', '[RM X]', '[RM X]')];
    const season = [{ label: '8+ sessions', aria: '8 or more sessions discount' }, { label: '12+ sessions', aria: '12 or more sessions discount' }, { label: '24+ sessions', aria: '24 or more sessions discount' }];
    return { venues, courts, bands, season, venueName: names[this.state.v] };
  }

  componentDidMount() { document.title = "Back Office - Venues and pricing"; }

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
          <Link to="/admin/loyalty" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Loyalty & rewards"}
          </Link>
          <Link to="/admin/pricing" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
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
            {"Venues & pricing"}
          </h1>
          <button style={{height: "44px", padding: "0 16px", borderRadius: "10px", border: "1px solid #6D28D9", background: "#FFFFFF", color: "#5B21B6", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
            {"+ Add venue"}
          </button>
          <button style={{height: "44px", padding: "0 18px", borderRadius: "10px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
            {"Save changes"}
          </button>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
          <section style={{flex: "1 1 240px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "14px", display: "flex", flexDirection: "column", gap: "6px"}}>
            <div style={{fontSize: "12px", fontWeight: "800", color: "#4B5563", padding: "4px 6px 8px"}}>
              {"VENUES"}
            </div>
            {(v.venues || []).map((v: any, $index: number) => (
              <React.Fragment key={$index}>
                <button onClick={v.pick} style={{minHeight: "52px", padding: "8px 12px", borderRadius: "10px", font: "inherit", textAlign: "left", cursor: "pointer", border: v.border, background: v.bg, display: "flex", flexDirection: "column", gap: "2px"}}>
                  <span style={{fontWeight: "800", fontSize: "14px", color: "#111827"}}>
                    {v.name}
                  </span>
                  <span style={{fontSize: "12px", color: "#4B5563"}}>
                    {v.meta}
                  </span>
                </button>
              </React.Fragment>
            ))}
          </section>
          <div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
            <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                  {"Courts \u00b7 "}{v.venueName}
                </h2>
                <div style={{fontSize: "13px", color: "#374151"}}>
                  {"Open daily 7:00 AM \u2013 12:00 AM \u00b7 "}
                  <Link to="/admin/pricing" style={{fontWeight: "700"}}>
                    {"Edit hours and closures"}
                  </Link>
                </div>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px"}}>
                {(v.courts || []).map((c: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <div style={{padding: "12px", borderRadius: "12px", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", gap: "4px"}}>
                      <span style={{fontWeight: "800"}}>
                        {c.name}
                      </span>
                      <span style={{fontSize: "13px", color: "#4B5563"}}>
                        {c.sport}
                      </span>
                      <span style={{alignSelf: "flex-start", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "800", background: c.bg, color: c.fg}}>
                        {c.status}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
            <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Price per court-hour \u00b7 Badminton"}
              </h2>
              <div style={{overflowX: "auto"}}>
                <table style={{width: "100%", minWidth: "720px", borderCollapse: "collapse", fontSize: "14px"}}>
                  <thead>
                    <tr>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"TIME BAND"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"DAYS"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"PUBLIC (RM)"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"MEMBER+ (RM)"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(v.bands || []).map((b: any, $index: number) => (
                      <React.Fragment key={$index}>
                        <tr>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", fontWeight: "700"}}>
                            {b.band}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            {b.days}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            <input aria-label={b.pubAria} defaultValue={b.pub} style={{width: "110px", height: "40px", borderRadius: "8px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px"}} />
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            <input aria-label={b.memAria} defaultValue={b.mem} style={{width: "110px", height: "40px", borderRadius: "8px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px"}} />
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{fontSize: "13px", color: "#374151"}}>
                {"Member price applies to Member, Silver, Gold and Platinum. Public holidays use the weekend band."}
              </div>
            </section>
            <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
                <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                  {"Season discounts"}
                </h2>
                <button style={{height: "40px", padding: "0 14px", borderRadius: "10px", border: "1px solid #D1D5DB", background: "#FFFFFF", font: "inherit", fontWeight: "700", fontSize: "13px", cursor: "pointer"}}>
                  {"+ Add tier"}
                </button>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px"}}>
                {(v.season || []).map((s: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <div style={{padding: "14px", borderRadius: "12px", background: "#ECFEFF", display: "flex", flexDirection: "column", gap: "8px"}}>
                      <span style={{fontWeight: "800", color: "#155E75"}}>
                        {s.label}
                      </span>
                      <label style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "700", color: "#155E75"}}>
                        {"Discount "}
                        <input aria-label={s.aria} defaultValue="[X]" style={{width: "64px", height: "38px", borderRadius: "8px", border: "1px solid #A5F3FC", padding: "0 8px", font: "inherit", fontSize: "14px"}} />
                        {" %"}
                      </label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div style={{fontSize: "13px", color: "#374151"}}>
                {"Season bookings are paid in full upfront. The discount stacks on top of member pricing."}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
    );
  }
}
