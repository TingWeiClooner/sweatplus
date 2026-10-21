// @ts-nocheck
// Generated from the SweatPlus design canvas (Membership.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class MembershipPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { redeemed: {} }; }
  renderVals() {
    const tiers = [
      { name: 'Fan', bg: '#F1F5F9', fg: '#334155' },
      { name: 'Member', bg: '#991B1B', fg: '#FFFFFF' },
      { name: 'Silver', bg: '#CBD5E1', fg: '#1E293B' },
      { name: 'Gold', bg: '#CA8A04', fg: '#1C1917' },
      { name: 'Platinum', bg: '#4C1D95', fg: '#FFFFFF' }
    ];
    const Y = { check: true, isText: false, text: '', color: '#0F172A' };
    const N = { check: false, isText: true, text: '–', color: '#64748B' };
    const T = (t) => ({ check: false, isText: true, text: t, color: '#0F172A' });
    const rows = [
      { name: 'Points', cells: [Y, Y, Y, Y, Y] },
      { name: 'Court member price', cells: [N, Y, Y, Y, Y] },
      { name: 'Retail member price', cells: [N, Y, Y, Y, Y] },
      { name: 'Free parking', cells: [N, T('6 hrs'), T('40 hrs'), T('80 hrs'), T('100 hrs')] },
      { name: 'Birthday gift', cells: [N, Y, Y, Y, Y] },
      { name: 'Lounge facilities', cells: [N, N, N, T('By invitation'), Y] },
      { name: 'Insurance', cells: [N, Y, Y, Y, Y] },
      { name: 'Egenki massage', cells: [N, N, Y, Y, Y] },
      { name: 'PBCA training', cells: [N, N, Y, Y, Y] },
      { name: 'Carwash', cells: [N, N, Y, Y, Y] },
      { name: 'Cafe', cells: [N, N, Y, Y, Y] }
    ];
    const packages = [
      { name: 'Silver', bg: '#CBD5E1', fg: '#1E293B', perk: '40 hrs free parking, massage, PBCA training, carwash and cafe perks' },
      { name: 'Gold', bg: '#CA8A04', fg: '#1C1917', perk: 'Everything in Silver, 80 hrs parking and lounge by invitation' },
      { name: 'Platinum', bg: '#4C1D95', fg: '#FFFFFF', perk: 'Everything in Gold, 100 hrs parking and full lounge access' }
    ];
    const base = [
      { id: 'a', name: 'RM10 court voucher', where: 'Use on any court booking', cost: '[X] pts' },
      { id: 'b', name: 'RM10 retail voucher', where: 'Use at SweatPlus counters', cost: '[X] pts' },
      { id: 'c', name: 'Free 1-hour court', where: 'Off-peak, any venue', cost: '[X] pts' },
      { id: 'd', name: 'Cafe drink voucher', where: 'Any SweatPlus cafe', cost: '[X] pts' }
    ];
    const rd = this.state.redeemed;
    const rewards = base.map((w) => {
      const done = !!rd[w.id];
      return Object.assign({}, w, {
        done: done,
        label: done ? 'Added to your vouchers' : 'Redeem',
        bg: done ? '#ECFDF5' : '#6D28D9', fg: done ? '#166534' : '#FFFFFF',
        border: done ? '1px solid #BBF7D0' : 'none',
        redeem: () => { const n = Object.assign({}, rd); n[w.id] = true; this.setState({ redeemed: n }); }
      });
    });
    return { tiers, rows, packages, rewards, points: '2,681' };
  }

  componentDidMount() { document.title = "SweatPlus - Membership and Rewards"; }

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
            <Link to="/booking" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
              {"Book a Court"}
            </Link>
            <Link to="/membership" style={{padding: "12px 14px", borderRadius: "10px", background: "#EFE9FC", color: "#5B21B6", fontWeight: "700", fontSize: "15px"}}>
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
      <main style={{maxWidth: "1280px", margin: "0 auto", padding: "32px 32px 64px", display: "flex", flexDirection: "column", gap: "28px"}}>
        <h1 style={{margin: "0", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em"}}>
          {"Membership & rewards"}
        </h1>
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
          <section style={{flex: "1 1 380px", background: "#7F1D1D", color: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "230px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <span style={{fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "#FECACA"}}>
                {"YOUR TIER"}
              </span>
              <span style={{fontSize: "13px", fontWeight: "600", color: "#FECACA"}}>
                {"Valid until [DD/MM/YYYY]"}
              </span>
            </div>
            <div style={{fontSize: "44px", fontWeight: "800", fontStyle: "italic", letterSpacing: "-0.01em"}}>
              {"Member"}
            </div>
            <div style={{fontSize: "15px", color: "#FEE2E2"}}>
              {"[Member name] \u00b7 ID [SP-000000]"}
            </div>
            <div style={{marginTop: "auto", display: "flex", gap: "10px"}}>
              <Link to="/account" style={{height: "44px", padding: "0 18px", borderRadius: "12px", background: "#FFFFFF", color: "#7F1D1D", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center"}}>
                {"Show member QR"}
              </Link>
            </div>
          </section>
          <section style={{flex: "2 1 480px", background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "14px"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px"}}>
              <div>
                <div style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", letterSpacing: "0.08em"}}>
                  {"POINTS BALANCE"}
                </div>
                <div style={{fontSize: "40px", fontWeight: "800"}}>
                  {v.points}
                </div>
              </div>
              <div style={{textAlign: "right"}}>
                <div style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", letterSpacing: "0.08em"}}>
                  {"EARN RATE"}
                </div>
                <div style={{fontSize: "20px", fontWeight: "800"}}>
                  {"1 pt per RM1"}
                </div>
              </div>
            </div>
            <div style={{fontSize: "17px", fontWeight: "700"}}>
              {"Spend [RM X] more this period to reach Silver"}
            </div>
            <div style={{height: "12px", borderRadius: "6px", background: "#EFE9FC", overflow: "hidden"}}>
              <div style={{width: "62%", height: "12px", background: "#6D28D9"}}></div>
            </div>
            <div style={{fontSize: "14px", color: "#475569"}}>
              {"Qualifying spend counts court bookings and purchases at SweatPlus counters. Or skip ahead with a tier top-up package below."}
            </div>
          </section>
        </div>
        <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px"}}>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}>
            <div>
              <h2 style={{margin: "0", fontSize: "24px", fontWeight: "800"}}>
                {"Tier benefits"}
              </h2>
              <div style={{fontSize: "14px", color: "#475569", marginTop: "4px"}}>
                {"Membership RM15 per year \u00b7 upgrade by spend or by top-up"}
              </div>
            </div>
          </div>
          <div style={{overflowX: "auto"}}>
            <table style={{width: "100%", minWidth: "760px", borderCollapse: "separate", borderSpacing: "0", fontSize: "14px"}}>
              <thead>
                <tr>
                  <th scope="col" style={{textAlign: "left", padding: "14px", color: "#475569", fontWeight: "700"}}>
                    {"Benefit"}
                  </th>
                  {(v.tiers || []).map((t: any, $index: number) => (
                    <React.Fragment key={$index}>
                      <th scope="col" style={{padding: "14px", textAlign: "center"}}>
                        <span style={{display: "inline-block", minWidth: "96px", padding: "10px 12px", borderRadius: "12px", background: t.bg, color: t.fg, fontWeight: "800", fontStyle: "italic", fontSize: "16px"}}>
                          {t.name}
                        </span>
                      </th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(v.rows || []).map((r: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <tr>
                      <th scope="row" style={{textAlign: "left", padding: "12px 14px", borderTop: "1px solid #EEECF4", fontWeight: "600"}}>
                        {r.name}
                      </th>
                      {(r.cells || []).map((c: any, $index: number) => (
                        <React.Fragment key={$index}>
                          <td style={{textAlign: "center", padding: "12px 14px", borderTop: "1px solid #EEECF4", fontWeight: "700", color: c.color}}>
                            {c.check ? (
                              <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="3" role="img" aria-label="Included">
                                  <path d="M5 12l5 5L20 7"></path>
                                </svg>
                              </>
                            ) : null}
                            {c.isText ? (
                              <>
                                {c.text}
                              </>
                            ) : null}
                          </td>
                        </React.Fragment>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section style={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <div>
            <h2 style={{margin: "0", fontSize: "24px", fontWeight: "800"}}>
              {"Upgrade with a top-up"}
            </h2>
            <div style={{fontSize: "14px", color: "#475569", marginTop: "4px"}}>
              {"The full amount goes into your wallet to spend on courts and at the counter. Your tier upgrades immediately."}
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px"}}>
            {(v.packages || []).map((p: any, $index: number) => (
              <React.Fragment key={$index}>
                <article style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px"}}>
                  <span style={{alignSelf: "flex-start", padding: "8px 14px", borderRadius: "10px", background: p.bg, color: p.fg, fontWeight: "800", fontStyle: "italic"}}>
                    {p.name}
                  </span>
                  <div style={{fontSize: "28px", fontWeight: "800"}}>
                    {"Top up [RM X]"}
                  </div>
                  <div style={{fontSize: "14px", color: "#475569"}}>
                    {p.perk}
                  </div>
                  <button style={{height: "48px", borderRadius: "12px", border: "none", background: "#0F172A", color: "#FFFFFF", font: "inherit", fontWeight: "700", fontSize: "15px", cursor: "pointer", marginTop: "auto"}}>
                    {"Top up and upgrade"}
                  </button>
                </article>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section style={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "12px"}}>
            <div>
              <h2 style={{margin: "0", fontSize: "24px", fontWeight: "800"}}>
                {"Rewards catalog"}
              </h2>
              <div style={{fontSize: "14px", color: "#475569", marginTop: "4px"}}>
                {"Redeem points for vouchers you can use online or show at the counter"}
              </div>
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px"}}>
            {(v.rewards || []).map((w: any, $index: number) => (
              <React.Fragment key={$index}>
                <article style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px"}}>
                  <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "#EFE9FC", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" aria-hidden="true">
                      <path d="M3 9V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a3 3 0 0 0 0 6v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a3 3 0 0 0 0-6z"></path>
                      <path d="M14 5v14" strokeDasharray="2 2"></path>
                    </svg>
                  </div>
                  <div style={{fontWeight: "800", fontSize: "17px"}}>
                    {w.name}
                  </div>
                  <div style={{fontSize: "14px", color: "#475569"}}>
                    {w.where}
                  </div>
                  <div style={{fontSize: "15px", fontWeight: "800", color: "#5B21B6"}}>
                    {w.cost}
                  </div>
                  <button onClick={w.redeem} disabled={w.done} style={{height: "46px", borderRadius: "12px", font: "inherit", fontWeight: "700", fontSize: "15px", cursor: "pointer", marginTop: "auto", border: w.border, background: w.bg, color: w.fg}}>
                    {w.label}
                  </button>
                </article>
              </React.Fragment>
            ))}
          </div>
        </section>
      </main>
    </div>
    );
  }
}
