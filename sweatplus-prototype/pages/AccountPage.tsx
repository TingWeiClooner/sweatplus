// @ts-nocheck
// Generated from the SweatPlus design canvas (Account.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AccountPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { tab: 'Bookings', qr: false, bday: false }; }
  renderVals() {
    const st = this.state;
    const names = ['Bookings', 'History', 'Benefits', 'Vouchers', 'Support'];
    const tabs = names.map((n) => {
      const on = st.tab === n;
      return { name: n, on: on ? 'true' : 'false', fg: on ? '#5B21B6' : '#475569', line: on ? '3px solid #6D28D9' : '3px solid transparent', pick: () => this.setState({ tab: n }) };
    });
    const other = {
      Benefits: 'Your Member benefits: court and retail member price, 6 hrs free parking, birthday gift, insurance. Staff validate perks by scanning your member QR.',
      Vouchers: 'Vouchers you redeem from the rewards catalog appear here, with expiry dates and a QR to use at the counter.',
      Support: '[Support contact details and FAQ links]'
    };
    return {
      tabs,
      isBookings: st.tab === 'Bookings',
      isHistory: st.tab === 'History',
      isOther: !!other[st.tab],
      otherText: other[st.tab] || '',
      showQr: st.qr, noQr: !st.qr,
      qrLabel: st.qr ? 'Hide QR' : 'Scan to pay',
      toggleQr: () => this.setState({ qr: !st.qr }),
      bdayLabel: st.bday ? 'Added to vouchers' : 'Claim now',
      claimBday: () => this.setState({ bday: true }),
      bookings: [
        { court: 'Court G1', type: 'SINGLE', when: '10/12/2026 · 08:00 AM', amount: 'RM 20.00' },
        { court: 'Court G1, Court G2', type: 'SINGLE', when: '12/12/2026 · 07:00 PM', amount: 'RM 40.00' },
        { court: 'Court G3', type: 'SEASON', when: 'Every Tue 8:00 PM · 8 weeks', amount: '[RM X]' }
      ],
      history: [
        { date: '18 Oct 2026', desc: 'Court G1 booking', wallet: '- RM 20.00', pts: 'pending' },
        { date: '15 Oct 2026', desc: 'Counter purchase (Xilnex)', wallet: '- RM 35.00', pts: '+35' },
        { date: '12 Oct 2026', desc: 'Wallet top-up (Fiuu)', wallet: '+ RM 500.00', pts: '–' },
        { date: '10 Oct 2026', desc: 'Daily check-in', wallet: '–', pts: '+1' },
        { date: '05 Oct 2026', desc: 'Redeemed RM10 court voucher', wallet: '–', pts: '- [X]' }
      ]
    };
  }

  componentDidMount() { document.title = "SweatPlus - My Balance"; }

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
            <Link to="/membership" style={{padding: "12px 14px", borderRadius: "10px", color: "#334155", fontWeight: "600", fontSize: "15px"}}>
              {"Membership & Rewards"}
            </Link>
            <Link to="/account" style={{padding: "12px 14px", borderRadius: "10px", background: "#EFE9FC", color: "#5B21B6", fontWeight: "700", fontSize: "15px"}}>
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
        <h1 style={{margin: "0", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.02em"}}>
          {"My balance"}
        </h1>
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch"}}>
          <section style={{flex: "2 1 460px", background: "#5B21B6", color: "#FFFFFF", borderRadius: "24px", padding: "30px", display: "flex", flexDirection: "column", gap: "18px"}}>
            <span style={{fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "#E4D9FF"}}>
              {"CURRENT BALANCE"}
            </span>
            <div style={{fontSize: "52px", fontWeight: "800", letterSpacing: "-0.02em"}}>
              {"RM 1,480.00"}
            </div>
            <div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
              <button style={{flex: "1 1 160px", height: "52px", borderRadius: "14px", border: "none", background: "#FFFFFF", color: "#5B21B6", font: "inherit", fontWeight: "800", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B21B6" strokeWidth="2.5" aria-hidden="true">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                {"Top up"}
              </button>
              <button onClick={v.toggleQr} style={{flex: "1 1 160px", height: "52px", borderRadius: "14px", border: "1px solid #A98BEA", background: "#6D3FD0", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"></path>
                </svg>
                {v.qrLabel}
              </button>
            </div>
          </section>
          {v.showQr ? (
            <>
              <section style={{flex: "1 1 300px", background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center"}}>
                <div style={{fontWeight: "800", fontSize: "17px"}}>
                  {"Show this at the counter"}
                </div>
                <div style={{width: "180px", height: "180px", borderRadius: "16px", border: "2px dashed #C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: "13px", fontWeight: "600"}}>
                  {"[Dynamic member QR]"}
                </div>
                <div style={{fontSize: "13px", color: "#475569"}}>
                  {"Refreshes every few minutes \u00b7 pays from wallet, applies member price and vouchers"}
                </div>
              </section>
            </>
          ) : null}
          {v.noQr ? (
            <>
              <section style={{flex: "1 1 300px", background: "#BE185D", color: "#FFFFFF", borderRadius: "24px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px"}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" aria-hidden="true">
                  <path d="M4 21V12h16v9M2 21h20M7 12V9M12 12V9M17 12V9M7 6v.01M12 6v.01M17 6v.01"></path>
                </svg>
                <div style={{fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "#FCE7F3"}}>
                  {"BIRTHDAY REWARD"}
                </div>
                <div style={{fontSize: "22px", fontWeight: "800"}}>
                  {"Enjoy 20% off your next booking"}
                </div>
                <button onClick={v.claimBday} style={{marginTop: "auto", alignSelf: "flex-start", height: "44px", padding: "0 20px", borderRadius: "22px", border: "none", background: "#FFFFFF", color: "#9D174D", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
                  {v.bdayLabel}
                </button>
              </section>
            </>
          ) : null}
        </div>
        <section style={{background: "#FFFFFF", border: "1px solid #E5E3EE", borderRadius: "24px", padding: "8px 24px 24px"}}>
          <div style={{display: "flex", flexWrap: "wrap", gap: "4px", borderBottom: "1px solid #EEECF4"}} role="tablist" aria-label="Account sections">
            {(v.tabs || []).map((t: any, $index: number) => (
              <React.Fragment key={$index}>
                <button role="tab" aria-selected={t.on} onClick={t.pick} style={{height: "52px", padding: "0 16px", border: "none", background: "transparent", font: "inherit", fontWeight: "700", fontSize: "15px", cursor: "pointer", color: t.fg, borderBottom: t.line}}>
                  {t.name}
                </button>
              </React.Fragment>
            ))}
          </div>
          {v.isBookings ? (
            <>
              <div style={{display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px"}}>
                {(v.bookings || []).map((b: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <article style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", padding: "16px", border: "1px solid #EEECF4", borderRadius: "16px"}}>
                      <div style={{width: "52px", height: "52px", borderRadius: "14px", background: "#EFE9FC", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" aria-hidden="true">
                          <circle cx="9" cy="9" r="5"></circle>
                          <path d="M12.5 12.5L20 20M6 7l6 4"></path>
                        </svg>
                      </div>
                      <div style={{flex: "1 1 240px"}}>
                        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                          <span style={{fontWeight: "800", fontSize: "16px"}}>
                            {b.court}
                          </span>
                          <span style={{padding: "2px 8px", borderRadius: "6px", background: "#EFE9FC", color: "#5B21B6", fontSize: "11px", fontWeight: "800"}}>
                            {b.type}
                          </span>
                        </div>
                        <div style={{fontSize: "14px", color: "#475569"}}>
                          {"Sports Arena Sentosa \u00b7 "}{b.when}
                        </div>
                      </div>
                      <div style={{textAlign: "right"}}>
                        <span style={{padding: "4px 10px", borderRadius: "999px", background: "#DCFCE7", color: "#166534", fontSize: "12px", fontWeight: "700"}}>
                          {"Confirmed"}
                        </span>
                        <div style={{fontWeight: "800", marginTop: "6px"}}>
                          {b.amount}
                        </div>
                      </div>
                    </article>
                  </React.Fragment>
                ))}
              </div>
            </>
          ) : null}
          {v.isHistory ? (
            <>
              <div style={{overflowX: "auto", paddingTop: "12px"}}>
                <table style={{width: "100%", minWidth: "620px", borderCollapse: "collapse", fontSize: "14px"}}>
                  <thead>
                    <tr>
                      <th scope="col" style={{textAlign: "left", padding: "12px", color: "#475569"}}>
                        {"Date"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "12px", color: "#475569"}}>
                        {"Description"}
                      </th>
                      <th scope="col" style={{textAlign: "right", padding: "12px", color: "#475569"}}>
                        {"Wallet"}
                      </th>
                      <th scope="col" style={{textAlign: "right", padding: "12px", color: "#475569"}}>
                        {"Points"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(v.history || []).map((h: any, $index: number) => (
                      <React.Fragment key={$index}>
                        <tr>
                          <td style={{padding: "12px", borderTop: "1px solid #EEECF4"}}>
                            {h.date}
                          </td>
                          <td style={{padding: "12px", borderTop: "1px solid #EEECF4", fontWeight: "600"}}>
                            {h.desc}
                          </td>
                          <td style={{padding: "12px", borderTop: "1px solid #EEECF4", textAlign: "right", fontWeight: "700"}}>
                            {h.wallet}
                          </td>
                          <td style={{padding: "12px", borderTop: "1px solid #EEECF4", textAlign: "right", fontWeight: "700", color: "#5B21B6"}}>
                            {h.pts}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
          {v.isOther ? (
            <>
              <div style={{padding: "28px 4px", color: "#475569", fontSize: "15px"}}>
                {v.otherText}
              </div>
            </>
          ) : null}
        </section>
      </main>
    </div>
    );
  }
}
