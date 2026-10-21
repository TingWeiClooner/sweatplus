// @ts-nocheck
// Generated from the SweatPlus design canvas (Booking.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class BookingPage extends React.Component<any, any> {

  constructor(p) {
    super(p);
    this.state = { mode: 'single', sport: 'Badminton', date: 0, sel: { 'G1-2': true, 'G1-3': true } };
  }
  renderVals() {
    const st = this.state;
    const sportNames = ['Badminton', 'Futsal', 'Pickleball', 'Ping Pong', 'Pool'];
    const sports = sportNames.map((n) => {
      const on = st.sport === n;
      return { name: n, bg: on ? '#6D28D9' : '#FFFFFF', fg: on ? '#FFFFFF' : '#334155', border: on ? '1.5px solid #6D28D9' : '1px solid #D9D3EA', pick: () => this.setState({ sport: n }) };
    });
    const dows = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
    const dates = dows.map((d, i) => {
      const on = st.date === i;
      return { dow: d, day: String(20 + i), bg: on ? '#0F172A' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0F172A', border: on ? '1.5px solid #0F172A' : '1px solid #D9D3EA', pick: () => this.setState({ date: i }) };
    });
    const hours = ['4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
    const booked = { 'G1-0': 1, 'G1-4': 1, 'G2-1': 1, 'G2-2': 1, 'G3-5': 1, 'G3-6': 1, 'G4-0': 1, 'G4-3': 1, 'G5-4': 1, 'G6-1': 1, 'G6-5': 1 };
    const picked = [];
    const courts = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].map((c) => ({
      name: 'Court ' + c,
      cells: hours.map((h, i) => {
        const key = c + '-' + i;
        const isBooked = !!booked[key];
        const isSel = !!st.sel[key];
        if (isSel) picked.push({ label: 'Court ' + c + ' · ' + h });
        return {
          text: isBooked ? 'Booked' : (isSel ? 'Selected' : 'RM 20'),
          disabled: isBooked,
          aria: 'Court ' + c + ' ' + h + (isBooked ? ' booked' : (isSel ? ' selected' : ' available')),
          cursor: isBooked ? 'not-allowed' : 'pointer',
          bg: isBooked ? '#E2E8F0' : (isSel ? '#6D28D9' : '#FFFFFF'),
          fg: isBooked ? '#475569' : (isSel ? '#FFFFFF' : '#5B21B6'),
          border: isBooked ? '1px solid #E2E8F0' : (isSel ? '1.5px solid #6D28D9' : '1.5px solid #C4B5FD'),
          toggle: () => { if (isBooked) return; const s = Object.assign({}, st.sel); if (s[key]) delete s[key]; else s[key] = true; this.setState({ sel: s }); }
        };
      })
    }));
    const isSeason = st.mode === 'season';
    const n = picked.length;
    const total = n * 20;
    return {
      sports, dates, hours, courts, picked,
      isSeason,
      hasNone: n === 0,
      sportName: st.sport,
      dateLabel: dows[st.date] + ' ' + (20 + st.date) + ' Oct 2026',
      gridHeading: isSeason ? '3 · PICK YOUR WEEKLY SLOT (FIRST SESSION DATE)' : '3 · DATE AND TIME',
      subtotal: 'RM ' + total.toFixed(2),
      points: String(total),
      singleBg: isSeason ? 'transparent' : '#FFFFFF', singleFg: isSeason ? '#475569' : '#5B21B6',
      seasonBg: isSeason ? '#FFFFFF' : 'transparent', seasonFg: isSeason ? '#5B21B6' : '#475569',
      setSingle: () => this.setState({ mode: 'single' }),
      setSeason: () => this.setState({ mode: 'season' })
    };
  }

  componentDidMount() { document.title = "SweatPlus - Book a Court"; }

  render() {
    const v: any = this.renderVals ? this.renderVals() : {};
    return (
    <div style={{fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: "#0F172A", background: "#F6F5FB", minHeight: "100vh"}}>
      <header style={{background: "#FFFFFF", borderBottom: "1px solid #E5E3EE"}}>
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "14px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px"}}>
          <Link to="/" style={{display: "flex", alignItems: "center", gap: "12px", color: "#0F172A"}}>
            <div style={{width: "44px", height: "44px", borderRadius: "12px", background: "#8E2A8B", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "11px", lineHeight: "1.05"}}>
              {"sweat"}
              <br />
              {"plus"}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <span style={{fontWeight: "800", fontSize: "18px"}}>
                {"SweatPlus"}
              </span>
              <span style={{fontSize: "11px", color: "#5B5670", letterSpacing: "0.06em"}}>
                {"GATEWAY TO HEALTHY LIFESTYLE"}
              </span>
            </div>
          </Link>
          <nav style={{display: "flex", flexWrap: "wrap", gap: "4px", flex: "1 1 auto"}} aria-label="Main">
            <Link to="/" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
              {"Home"}
            </Link>
            <Link to="/booking" style={{padding: "12px 14px", borderRadius: "10px", background: "#EFE9FC", color: "#5B21B6", fontWeight: "700", fontSize: "15px"}}>
              {"Book a Court"}
            </Link>
            <Link to="/membership" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
              {"Membership & Rewards"}
            </Link>
            <Link to="/account" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
              {"My Balance"}
            </Link>
          </nav>
          <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
            <button aria-label="Notifications" style={{width: "44px", height: "44px", borderRadius: "22px", border: "1px solid #E5E3EE", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"></path>
              </svg>
            </button>
            <Link to="/account" aria-label="My account" style={{width: "44px", height: "44px", borderRadius: "22px", background: "#0F172A", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px"}}>
              {"[MN]"}
            </Link>
          </div>
        </div>
      </header>
      <main style={{maxWidth: "1280px", margin: "0 auto", padding: "32px 32px 64px", display: "flex", flexDirection: "column", gap: "24px"}}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px"}}>
          <h1 style={{margin: "0", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em"}}>
            {"Book a court"}
          </h1>
          <div style={{display: "flex", gap: "4px", padding: "4px", background: "#E9E6F2", borderRadius: "14px"}} role="group" aria-label="Booking type">
            <button onClick={v.setSingle} style={{height: "44px", padding: "0 22px", borderRadius: "10px", border: "none", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer", background: v.singleBg, color: v.singleFg}}>
              {"Single session"}
            </button>
            <button onClick={v.setSeason} style={{height: "44px", padding: "0 22px", borderRadius: "10px", border: "none", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer", background: v.seasonBg, color: v.seasonFg}}>
              {"Season booking"}
            </button>
          </div>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start"}}>
          <div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px"}}>
            <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <div style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", letterSpacing: "0.08em"}}>
                {"1 \u00b7 SPORT"}
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                {(v.sports || []).map((s: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <button onClick={s.pick} style={{height: "46px", padding: "0 18px", borderRadius: "12px", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer", border: s.border, background: s.bg, color: s.fg}}>
                      {s.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px"}}>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", color: "#5B5670"}}>
                  {"2 \u00b7 VENUE "}
                  <select style={{height: "46px", borderRadius: "12px", border: "1px solid #D9D3EA", padding: "0 12px", font: "inherit", fontSize: "15px", color: "#0F172A", background: "#FFFFFF"}}>
                    <option>
                      {"Sports Arena Sentosa"}
                    </option>
                    <option>
                      {"[Venue 2]"}
                    </option>
                    <option>
                      {"[Venue 3]"}
                    </option>
                    <option>
                      {"[Venue 4]"}
                    </option>
                    <option>
                      {"[Venue 5]"}
                    </option>
                  </select>
                </label>
                {v.isSeason ? (
                  <>
                    <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", color: "#5B5670"}}>
                      {"SEASON LENGTH "}
                      <select style={{height: "46px", borderRadius: "12px", border: "1px solid #D9D3EA", padding: "0 12px", font: "inherit", fontSize: "15px", color: "#0F172A", background: "#FFFFFF"}}>
                        <option>
                          {"8 weeks"}
                        </option>
                        <option>
                          {"12 weeks"}
                        </option>
                        <option>
                          {"3 months"}
                        </option>
                        <option>
                          {"6 months"}
                        </option>
                      </select>
                    </label>
                  </>
                ) : null}
              </div>
            </section>
            <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "16px"}}>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                <div style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", letterSpacing: "0.08em"}}>
                  {v.gridHeading}
                </div>
                <div style={{display: "flex", gap: "16px", fontSize: "13px", color: "#475569", fontWeight: "600"}}>
                  <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                    <span style={{width: "14px", height: "14px", borderRadius: "4px", background: "#FFFFFF", border: "1.5px solid #C4B5FD"}}></span>
                    {"Available"}
                  </span>
                  <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                    <span style={{width: "14px", height: "14px", borderRadius: "4px", background: "#6D28D9"}}></span>
                    {"Selected"}
                  </span>
                  <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                    <span style={{width: "14px", height: "14px", borderRadius: "4px", background: "#E2E8F0"}}></span>
                    {"Booked"}
                  </span>
                </div>
              </div>
              <div style={{display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px"}}>
                {(v.dates || []).map((d: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <button onClick={d.pick} style={{minWidth: "72px", height: "64px", borderRadius: "14px", font: "inherit", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", border: d.border, background: d.bg, color: d.fg}}>
                      <span style={{fontSize: "12px", fontWeight: "600"}}>
                        {d.dow}
                      </span>
                      <span style={{fontSize: "18px", fontWeight: "800"}}>
                        {d.day}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <div style={{overflowX: "auto"}}>
                <div style={{minWidth: "760px", display: "flex", flexDirection: "column", gap: "8px"}}>
                  <div style={{display: "grid", gridTemplateColumns: "96px repeat(7, minmax(0, 1fr))", gap: "8px", fontSize: "12px", fontWeight: "700", color: "#475569"}}>
                    <span></span>
                    {(v.hours || []).map((h: any, $index: number) => (
                      <React.Fragment key={$index}>
                        <span style={{textAlign: "center"}}>
                          {h}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                  {(v.courts || []).map((c: any, $index: number) => (
                    <React.Fragment key={$index}>
                      <div style={{display: "grid", gridTemplateColumns: "96px repeat(7, minmax(0, 1fr))", gap: "8px", alignItems: "center"}}>
                        <span style={{fontWeight: "800", fontSize: "14px"}}>
                          {c.name}
                        </span>
                        {(c.cells || []).map((cell: any, $index: number) => (
                          <React.Fragment key={$index}>
                            <button onClick={cell.toggle} disabled={cell.disabled} aria-label={cell.aria} style={{height: "44px", borderRadius: "10px", font: "inherit", fontSize: "12px", fontWeight: "700", cursor: cell.cursor, background: cell.bg, color: cell.fg, border: cell.border}}>
                              {cell.text}
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
            <Link to="/booking" style={{alignSelf: "flex-start", fontWeight: "700", fontSize: "15px", padding: "10px 0"}}>
              {"Organising an event or tournament? Send a venue request"}
            </Link>
          </div>
          <aside style={{flex: "1 1 320px", background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <div style={{fontSize: "20px", fontWeight: "800"}}>
              {"Booking summary"}
            </div>
            <div style={{fontSize: "14px", color: "#475569"}}>
              {v.sportName}{" \u00b7 Sports Arena Sentosa \u00b7 "}{v.dateLabel}
            </div>
            {v.hasNone ? (
              <>
                <div style={{padding: "18px", borderRadius: "14px", background: "#F6F5FB", color: "#475569", fontSize: "14px"}}>
                  {"Pick one or more available slots on the grid."}
                </div>
              </>
            ) : null}
            <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
              {(v.picked || []).map((p: any, $index: number) => (
                <React.Fragment key={$index}>
                  <div style={{display: "flex", justifyContent: "space-between", fontSize: "15px"}}>
                    <span style={{fontWeight: "600"}}>
                      {p.label}
                    </span>
                    <span>
                      {"RM 20.00"}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            {v.isSeason ? (
              <>
                <div style={{padding: "14px", borderRadius: "14px", background: "#ECFEFF", color: "#155E75", fontSize: "14px", fontWeight: "600"}}>
                  {"Season: same slot weekly for 8 weeks \u00b7 [X]% season discount applied automatically"}
                </div>
              </>
            ) : null}
            <div style={{borderTop: "1px solid #E5E3EE", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px"}}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{color: "#475569"}}>
                  {"Member price"}
                </span>
                <span style={{fontWeight: "600"}}>
                  {v.subtotal}
                </span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{color: "#475569"}}>
                  {"Voucher"}
                </span>
                <Link to="/membership" style={{fontWeight: "700"}}>
                  {"Apply"}
                </Link>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "800", paddingTop: "6px"}}>
                <span>
                  {"Total"}
                </span>
                <span>
                  {v.subtotal}
                </span>
              </div>
              <div style={{fontSize: "13px", color: "#475569"}}>
                {"Earn "}{v.points}{" points once you play"}
              </div>
            </div>
            <fieldset style={{border: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "8px"}}>
              <legend style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", marginBottom: "8px"}}>
                {"PAY WITH"}
              </legend>
              <label style={{display: "flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1.5px solid #6D28D9", fontWeight: "600", fontSize: "15px"}}>
                <input type="radio" name="pay" defaultChecked />
                {" Wallet (RM 1,480.00)"}
              </label>
              <label style={{display: "flex", alignItems: "center", gap: "10px", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #D9D3EA", fontWeight: "600", fontSize: "15px"}}>
                <input type="radio" name="pay" />
                {" FPX / card / e-wallet (Fiuu)"}
              </label>
            </fieldset>
            <button style={{height: "52px", borderRadius: "14px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "16px", cursor: "pointer"}}>
              {"Confirm and pay"}
            </button>
            <div style={{fontSize: "12px", color: "#475569", textAlign: "center"}}>
              {"Slots are held for 10 minutes during checkout"}
            </div>
          </aside>
        </div>
      </main>
    </div>
    );
  }
}
