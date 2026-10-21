// @ts-nocheck
// Generated from the SweatPlus design canvas (Main.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { claimed: false }; }
  renderVals() {
    const streak = this.state.claimed ? 6 : 5;
    const names = ['M','T','W','T','F','S','S'];
    const days = names.map((n, i) => {
      const done = i < streak;
      return { label: n, bg: done ? '#0E7490' : '#F1F5F9', fg: done ? '#FFFFFF' : '#475569' };
    });
    return {
      streak: streak,
      days: days,
      claimLabel: this.state.claimed ? 'Claimed today · +1 pt' : 'Claim +1 pt',
      claim: () => this.setState({ claimed: true })
    };
  }

  componentDidMount() { document.title = "SweatPlus - Home"; }

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
            <Link to="/" style={{padding: "12px 14px", borderRadius: "10px", background: "#EFE9FC", color: "#5B21B6", fontWeight: "700", fontSize: "15px"}}>
              {"Home"}
            </Link>
            <Link to="/booking" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
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
            <button style={{height: "44px", padding: "0 14px", borderRadius: "22px", border: "1px solid #E5E3EE", background: "#FFFFFF", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#334155", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              {" Arena Sentosa"}
            </button>
            <button aria-label="Notifications" style={{width: "44px", height: "44px", borderRadius: "22px", border: "1px solid #E5E3EE", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"></path>
              </svg>
              <span style={{position: "absolute", top: "10px", right: "11px", width: "8px", height: "8px", borderRadius: "4px", background: "#DC2626"}}></span>
            </button>
            <Link to="/account" aria-label="My account" style={{width: "44px", height: "44px", borderRadius: "22px", background: "#0F172A", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px"}}>
              {"[MN]"}
            </Link>
          </div>
        </div>
      </header>
      <main style={{maxWidth: "1280px", margin: "0 auto", padding: "36px 32px 64px", display: "flex", flexDirection: "column", gap: "32px"}}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px"}}>
          <div>
            <div style={{fontSize: "14px", color: "#5B5670", fontWeight: "600"}}>
              {"Good evening"}
            </div>
            <h1 style={{margin: "4px 0 0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.02em"}}>
              {"Welcome back, [Member Name]"}
            </h1>
          </div>
          <Link to="/booking" style={{height: "48px", padding: "0 24px", borderRadius: "12px", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px"}}>
            {"Book a court "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </Link>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px"}}>
          <section style={{gridColumn: "span 1", background: "#5B21B6", color: "#FFFFFF", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px", minHeight: "240px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <span style={{fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "#E4D9FF"}}>
                {"WALLET BALANCE"}
              </span>
              <Link to="/account" aria-label="Open wallet" style={{width: "44px", height: "44px", borderRadius: "12px", background: "#7C4DDB", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8"></path>
                </svg>
              </Link>
            </div>
            <div style={{fontSize: "44px", fontWeight: "800", letterSpacing: "-0.02em"}}>
              {"RM 1,480.00"}
            </div>
            <div style={{display: "flex", gap: "28px", paddingTop: "16px", borderTop: "1px solid #7C4DDB"}}>
              <div>
                <div style={{fontSize: "12px", fontWeight: "700", color: "#E4D9FF"}}>
                  {"POINTS"}
                </div>
                <div style={{fontSize: "20px", fontWeight: "800"}}>
                  {"2,681"}
                </div>
              </div>
              <div>
                <div style={{fontSize: "12px", fontWeight: "700", color: "#E4D9FF"}}>
                  {"TIER"}
                </div>
                <div style={{fontSize: "20px", fontWeight: "800"}}>
                  {"Member"}
                </div>
              </div>
            </div>
            <div style={{display: "flex", gap: "10px"}}>
              <Link to="/account" style={{flex: "1", height: "44px", borderRadius: "12px", background: "#FFFFFF", color: "#5B21B6", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {"Top up"}
              </Link>
              <Link to="/account" style={{flex: "1", height: "44px", borderRadius: "12px", border: "1px solid #A98BEA", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {"Scan to pay"}
              </Link>
            </div>
          </section>
          <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "14px", background: "#CFF4FB", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M8 12l3 3 5-6"></path>
                </svg>
              </div>
              <div>
                <div style={{fontSize: "18px", fontWeight: "800"}}>
                  {"Check in at court"}
                </div>
                <div style={{fontSize: "14px", color: "#5B5670"}}>
                  {"Streak: "}{v.streak}{" days"}
                </div>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "6px"}}>
              {(v.days || []).map((d: any, $index: number) => (
                <React.Fragment key={$index}>
                  <div style={{height: "36px", borderRadius: "8px", background: d.bg, color: d.fg, fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    {d.label}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <button onClick={v.claim} style={{marginTop: "auto", height: "48px", borderRadius: "12px", border: "none", background: "#0F172A", color: "#FFFFFF", font: "inherit", fontWeight: "700", fontSize: "15px", cursor: "pointer"}}>
              {v.claimLabel}
            </button>
          </section>
          <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <span style={{fontSize: "18px", fontWeight: "800"}}>
                {"Next booking"}
              </span>
              <span style={{padding: "4px 10px", borderRadius: "999px", background: "#DCFCE7", color: "#166534", fontSize: "12px", fontWeight: "700"}}>
                {"Confirmed"}
              </span>
            </div>
            <div style={{display: "flex", gap: "14px", alignItems: "center"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "14px", background: "#EFE9FC", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" aria-hidden="true">
                  <circle cx="9" cy="9" r="5"></circle>
                  <path d="M12.5 12.5L20 20M6 7l6 4"></path>
                </svg>
              </div>
              <div>
                <div style={{fontSize: "17px", fontWeight: "700"}}>
                  {"Court G1 \u00b7 Badminton"}
                </div>
                <div style={{fontSize: "14px", color: "#5B5670"}}>
                  {"Sports Arena Sentosa"}
                </div>
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px", background: "#F6F5FB", borderRadius: "14px", padding: "14px"}}>
              <div>
                <div style={{fontSize: "12px", color: "#5B5670", fontWeight: "600"}}>
                  {"DATE"}
                </div>
                <div style={{fontWeight: "700"}}>
                  {"10/12/2026"}
                </div>
              </div>
              <div>
                <div style={{fontSize: "12px", color: "#5B5670", fontWeight: "600"}}>
                  {"TIME"}
                </div>
                <div style={{fontWeight: "700"}}>
                  {"08:00 \u2013 09:00 AM"}
                </div>
              </div>
            </div>
            <Link to="/account" style={{marginTop: "auto", height: "48px", borderRadius: "12px", border: "1px solid #D9D3EA", color: "#0F172A", fontWeight: "700", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center"}}>
              {"View all bookings"}
            </Link>
          </section>
        </div>
        <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "24px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px"}}>
          <div style={{flex: "1 1 320px"}}>
            <div style={{fontSize: "13px", fontWeight: "700", color: "#5B5670", letterSpacing: "0.08em"}}>
              {"TIER PROGRESS"}
            </div>
            <div style={{fontSize: "20px", fontWeight: "800", marginTop: "4px"}}>
              {"Spend [RM X] more this period to reach Silver"}
            </div>
            <div style={{height: "12px", borderRadius: "6px", background: "#EFE9FC", marginTop: "14px", overflow: "hidden"}}>
              <div style={{width: "62%", height: "12px", background: "#6D28D9"}}></div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#5B5670", marginTop: "8px", fontWeight: "600"}}>
              <span>
                {"Member"}
              </span>
              <span>
                {"Silver \u00b7 40 hrs free parking"}
              </span>
            </div>
          </div>
          <Link to="/membership" style={{height: "48px", padding: "0 22px", borderRadius: "12px", background: "#EFE9FC", color: "#5B21B6", fontWeight: "700", fontSize: "15px", display: "flex", alignItems: "center"}}>
            {"See tier benefits"}
          </Link>
        </section>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px"}}>
          <Link to="/booking" style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", color: "#0F172A"}}>
            <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "#EFE9FC", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="3"></rect>
                <path d="M3 9h18M8 2v4M16 2v4"></path>
              </svg>
            </div>
            <div style={{fontWeight: "800", fontSize: "17px"}}>
              {"Single session"}
            </div>
            <div style={{fontSize: "14px", color: "#5B5670"}}>
              {"Book one or more slots today"}
            </div>
          </Link>
          <Link to="/booking" style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", color: "#0F172A"}}>
            <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "#CFF4FB", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2" aria-hidden="true">
                <path d="M17 2l4 4-4 4"></path>
                <path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"></path>
                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <div style={{fontWeight: "800", fontSize: "17px"}}>
              {"Season booking"}
            </div>
            <div style={{fontSize: "14px", color: "#5B5670"}}>
              {"Same slot every week, auto-discounted"}
            </div>
          </Link>
          <Link to="/membership" style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", color: "#0F172A"}}>
            <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "#DBEAFE", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                <path d="M12 8v13M3 12h18M12 8S10 3 7.5 3a2.5 2.5 0 0 0 0 5H12zM12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5H12z"></path>
              </svg>
            </div>
            <div style={{fontWeight: "800", fontSize: "17px"}}>
              {"Rewards"}
            </div>
            <div style={{fontSize: "14px", color: "#5B5670"}}>
              {"Redeem points for vouchers"}
            </div>
          </Link>
          <Link to="/account" style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", color: "#0F172A"}}>
            <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "#FFEDD5", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="6" width="20" height="14" rx="3"></rect>
                <path d="M2 10h20M16 15h2"></path>
              </svg>
            </div>
            <div style={{fontWeight: "800", fontSize: "17px"}}>
              {"Top up wallet"}
            </div>
            <div style={{fontSize: "14px", color: "#5B5670"}}>
              {"Pay faster at courts and counters"}
            </div>
          </Link>
        </div>
        <section style={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{margin: "0", fontSize: "24px", fontWeight: "800"}}>
              {"Featured"}
            </h2>
            <Link to="/" style={{fontWeight: "700", fontSize: "15px", padding: "10px 0"}}>
              {"See all"}
            </Link>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px"}}>
            <article style={{borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E5E3EE"}}>
              <div style={{height: "180px", background: "#1E1B3A", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600"}}>
                {"[Photo: Lightning Cup 2026]"}
              </div>
              <div style={{padding: "18px 20px", display: "flex", flexDirection: "column", gap: "8px"}}>
                <span style={{alignSelf: "flex-start", padding: "3px 10px", borderRadius: "999px", background: "#CFF4FB", color: "#155E75", fontSize: "12px", fontWeight: "700"}}>
                  {"EVENT"}
                </span>
                <div style={{fontWeight: "800", fontSize: "18px"}}>
                  {"Lightning Cup 2026"}
                </div>
                <div style={{fontSize: "14px", color: "#5B5670"}}>
                  {"Annual open tournament for all levels. Registration opens soon."}
                </div>
              </div>
            </article>
            <article style={{borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E5E3EE"}}>
              <div style={{height: "180px", background: "#1E1B3A", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600"}}>
                {"[Photo: Pro Masterclass]"}
              </div>
              <div style={{padding: "18px 20px", display: "flex", flexDirection: "column", gap: "8px"}}>
                <span style={{alignSelf: "flex-start", padding: "3px 10px", borderRadius: "999px", background: "#CFF4FB", color: "#155E75", fontSize: "12px", fontWeight: "700"}}>
                  {"NEWS"}
                </span>
                <div style={{fontWeight: "800", fontSize: "18px"}}>
                  {"Exclusive Pro Masterclass"}
                </div>
                <div style={{fontSize: "14px", color: "#5B5670"}}>
                  {"[Short description of the masterclass]"}
                </div>
              </div>
            </article>
            <article style={{borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E5E3EE"}}>
              <div style={{height: "180px", background: "#1E1B3A", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600"}}>
                {"[Photo: Arena Sentosa courts]"}
              </div>
              <div style={{padding: "18px 20px", display: "flex", flexDirection: "column", gap: "8px"}}>
                <span style={{alignSelf: "flex-start", padding: "3px 10px", borderRadius: "999px", background: "#CFF4FB", color: "#155E75", fontSize: "12px", fontWeight: "700"}}>
                  {"NEWS"}
                </span>
                <div style={{fontWeight: "800", fontSize: "18px"}}>
                  {"Arena Sentosa refurbishment complete"}
                </div>
                <div style={{fontSize: "14px", color: "#5B5670"}}>
                  {"New pro-grade vinyl flooring installed across the courts."}
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer style={{background: "#0F172A", color: "#CBD5E1"}}>
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "14px"}}>
          <span>
            {"\u00a9 2026 SweatPlus \u00b7 Gateway to Healthy Lifestyle"}
          </span>
          <span>
            {"5 venues \u00b7 Badminton \u00b7 Futsal \u00b7 Pickleball \u00b7 Ping Pong \u00b7 Pool"}
          </span>
        </div>
      </footer>
    </div>
    );
  }
}
