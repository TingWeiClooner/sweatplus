// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminBookings.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminBookingsPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { slot: 'G2-5', method: 'Counter' }; }
  renderVals() {
    const st = this.state;
    const hours = ['3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
    const taken = {
      'G1-1': ['Online', '[Customer]', 'Wallet'], 'G1-2': ['Online', '[Customer]', 'Fiuu'],
      'G2-2': ['Season', '[Customer]', 'Wk 3 of 8'], 'G2-3': ['Season', '[Customer]', 'Wk 3 of 8'],
      'G3-0': ['Blocked', 'Maintenance', 'Floor works'], 'G3-4': ['Walk-in', '[Walk-in]', 'Cash'],
      'G4-2': ['Walk-in', '[Walk-in]', 'Card'], 'G4-5': ['Online', '[Customer]', 'Wallet'],
      'G5-6': ['Season', '[Customer]', 'Wk 1 of 12'], 'G6-3': ['Phone', '[Customer]', 'Link unpaid']
    };
    const col = { Online: '#EDE9FE', Season: '#CFFAFE', 'Walk-in': '#FFEDD5', Phone: '#FFEDD5', Blocked: '#E5E7EB' };
    const courts = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].map((c) => ({
      name: 'Court ' + c,
      cells: hours.map((h, i) => {
        const key = c + '-' + i;
        const t = taken[key];
        const sel = st.slot === key;
        if (t) return { title: t[1], sub: t[0] + ' · ' + t[2], bg: col[t[0]], border: '1px solid ' + col[t[0]], aria: 'Court ' + c + ' ' + h + ' ' + t[0], pick: () => {} };
        return {
          title: sel ? 'New booking' : '', sub: sel ? h : '',
          bg: sel ? '#F5F3FF' : '#FFFFFF', border: sel ? '2px solid #6D28D9' : '1.5px dashed #D1D5DB',
          aria: 'Court ' + c + ' ' + h + ' free', pick: () => this.setState({ slot: key })
        };
      })
    }));
    const parts = st.slot.split('-');
    const methods = ['Counter (cash / card)', 'Send Fiuu payment link', 'Wallet (member)'].map((n) => {
      const key = n.split(' ')[0];
      const on = st.method === key;
      return { name: n, border: on ? '2px solid #6D28D9' : '1px solid #D1D5DB', bg: on ? '#F5F3FF' : '#FFFFFF', pick: () => this.setState({ method: key }) };
    });
    return {
      hours, courts, methods,
      slotLabel: 'Court ' + parts[0] + ' · ' + hours[Number(parts[1])] + ' · Tue 20 Oct',
      isCounter: st.method === 'Counter',
      isLink: st.method === 'Send',
      cta: st.method === 'Send' ? 'Create booking and send link' : 'Create booking'
    };
  }

  componentDidMount() { document.title = "Back Office - Bookings and walk-ins"; }

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
          <Link to="/admin/bookings" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
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
          {"[Staff name]"}
          <br />
          {"Front Desk \u00b7 Arena Sentosa"}
        </div>
      </aside>
      <div style={{flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column"}}>
        <div style={{background: "#FFFFFF", borderBottom: "1px solid #E5E7EB", padding: "14px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px"}}>
          <h1 style={{margin: "0", fontSize: "22px", fontWeight: "800", flex: "1 1 auto"}}>
            {"Bookings & walk-ins"}
          </h1>
          <select aria-label="Venue" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
            <option>
              {"Sports Arena Sentosa"}
            </option>
            <option>
              {"[Venue 2]"}
            </option>
          </select>
          <select aria-label="Sport" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 10px", font: "inherit", fontSize: "14px", background: "#FFFFFF"}}>
            <option>
              {"Badminton"}
            </option>
            <option>
              {"Futsal"}
            </option>
            <option>
              {"Pickleball"}
            </option>
          </select>
          <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
            <button aria-label="Previous day" style={{width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", background: "#FFFFFF", cursor: "pointer"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" aria-hidden="true">
                <path d="M15 6l-6 6 6 6"></path>
              </svg>
            </button>
            <span style={{fontWeight: "700", fontSize: "15px", padding: "0 6px"}}>
              {"Tue, 20 Oct 2026"}
            </span>
            <button aria-label="Next day" style={{width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", background: "#FFFFFF", cursor: "pointer"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 6l6 6-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
          <section style={{flex: "999 1 560px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px", fontWeight: "700", color: "#374151"}}>
              <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <span style={{width: "12px", height: "12px", borderRadius: "3px", background: "#EDE9FE"}}></span>
                {"Online"}
              </span>
              <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <span style={{width: "12px", height: "12px", borderRadius: "3px", background: "#CFFAFE"}}></span>
                {"Season"}
              </span>
              <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <span style={{width: "12px", height: "12px", borderRadius: "3px", background: "#FFEDD5"}}></span>
                {"Walk-in / phone"}
              </span>
              <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <span style={{width: "12px", height: "12px", borderRadius: "3px", background: "#E5E7EB"}}></span>
                {"Blocked"}
              </span>
              <span style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <span style={{width: "12px", height: "12px", borderRadius: "3px", border: "1.5px dashed #9CA3AF"}}></span>
                {"Free \u00b7 click to book"}
              </span>
            </div>
            <div style={{overflowX: "auto"}}>
              <div style={{minWidth: "760px", display: "flex", flexDirection: "column", gap: "6px"}}>
                <div style={{display: "grid", gridTemplateColumns: "80px repeat(8, minmax(0, 1fr))", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#4B5563"}}>
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
                    <div style={{display: "grid", gridTemplateColumns: "80px repeat(8, minmax(0, 1fr))", gap: "6px", alignItems: "stretch"}}>
                      <span style={{fontWeight: "800", fontSize: "14px", display: "flex", alignItems: "center"}}>
                        {c.name}
                      </span>
                      {(c.cells || []).map((x: any, $index: number) => (
                        <React.Fragment key={$index}>
                          <button onClick={x.pick} aria-label={x.aria} style={{minHeight: "54px", borderRadius: "8px", padding: "6px", font: "inherit", textAlign: "left", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", background: x.bg, border: x.border, color: "#111827"}}>
                            <span style={{fontSize: "12px", fontWeight: "800"}}>
                              {x.title}
                            </span>
                            <span style={{fontSize: "11px", color: "#374151"}}>
                              {x.sub}
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <aside style={{flex: "1 1 320px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
            <h2 style={{margin: "0", fontSize: "18px", fontWeight: "800"}}>
              {"New walk-in / phone booking"}
            </h2>
            <div style={{padding: "12px", borderRadius: "10px", background: "#F5F3FF", fontSize: "14px", fontWeight: "700", color: "#5B21B6"}}>
              {v.slotLabel}
            </div>
            <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", color: "#374151"}}>
              {"Customer phone or member QR "}
              <input defaultValue="+60 12-345 6789" style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
            </label>
            <div style={{padding: "12px", borderRadius: "10px", border: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px"}}>
              <div>
                <div style={{fontWeight: "800"}}>
                  {"[Member name]"}
                </div>
                <div style={{color: "#4B5563"}}>
                  {"Member tier \u00b7 2,681 pts"}
                </div>
              </div>
              <span style={{padding: "4px 8px", borderRadius: "6px", background: "#991B1B", color: "#FFFFFF", fontSize: "11px", fontWeight: "800"}}>
                {"MEMBER"}
              </span>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}>
              <span style={{color: "#4B5563"}}>
                {"Member price"}
              </span>
              <span style={{fontWeight: "800"}}>
                {"RM 20.00"}
              </span>
            </div>
            <fieldset style={{border: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "8px"}}>
              <legend style={{fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px"}}>
                {"Payment"}
              </legend>
              {(v.methods || []).map((m: any, $index: number) => (
                <React.Fragment key={$index}>
                  <button onClick={m.pick} style={{height: "44px", borderRadius: "10px", font: "inherit", fontSize: "14px", fontWeight: "700", textAlign: "left", padding: "0 12px", cursor: "pointer", border: m.border, background: m.bg, color: "#111827"}}>
                    {m.name}
                  </button>
                </React.Fragment>
              ))}
            </fieldset>
            {v.isCounter ? (
              <>
                <label style={{display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "700", color: "#374151"}}>
                  {"Receipt / reference no. "}
                  <input placeholder="e.g. Xilnex receipt no." style={{height: "44px", borderRadius: "10px", border: "1px solid #D1D5DB", padding: "0 12px", font: "inherit", fontSize: "14px"}} />
                </label>
              </>
            ) : null}
            {v.isLink ? (
              <>
                <div style={{padding: "12px", borderRadius: "10px", background: "#EFF6FF", color: "#1E40AF", fontSize: "14px", fontWeight: "600"}}>
                  {"A Fiuu payment link is sent by SMS / WhatsApp. The slot is held until paid or the link expires."}
                </div>
              </>
            ) : null}
            <button style={{height: "48px", borderRadius: "12px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "15px", cursor: "pointer"}}>
              {v.cta}
            </button>
            <button style={{height: "44px", borderRadius: "12px", border: "1px solid #D1D5DB", background: "#FFFFFF", color: "#374151", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer"}}>
              {"Block slot (maintenance / event)"}
            </button>
          </aside>
        </main>
      </div>
    </div>
    );
  }
}
