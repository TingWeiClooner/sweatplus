// @ts-nocheck
// Generated from the SweatPlus design canvas (AdminStaff.dc.html).
import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminStaffPage extends React.Component<any, any> {

  constructor(p) { super(p); this.state = { role: 'Front Desk' }; }
  renderVals() {
    const st = this.state;
    const s = (name, email, role, venues, last, status) => ({ name, email, role, venues, last, status, stBg: status === 'Active' ? '#DCFCE7' : '#FEF3C7', stFg: status === 'Active' ? '#166534' : '#92400E' });
    const staff = [
      s('[Admin name]', '[email]', 'Super Admin', 'All venues', 'Today, 9:12 AM', 'Active'),
      s('[Manager name]', '[email]', 'Venue Manager', 'Sports Arena Sentosa', 'Today, 8:40 AM', 'Active'),
      s('[Staff name]', '[email]', 'Front Desk', 'Sports Arena Sentosa', 'Today, 3:05 PM', 'Active'),
      s('[Staff name]', '[email]', 'Front Desk', '[Venue 2]', 'Yesterday', 'Active'),
      s('[Finance name]', '[email]', 'Finance', 'All venues', '—', 'Invited')
    ];
    const names = ['Super Admin', 'Venue Manager', 'Front Desk', 'Finance'];
    const roles = names.map((n) => {
      const on = st.role === n;
      return { name: n, on: on ? 'true' : 'false', border: on ? '2px solid #6D28D9' : '1px solid #D1D5DB', bg: on ? '#F5F3FF' : '#FFFFFF', fg: on ? '#5B21B6' : '#374151', pick: () => this.setState({ role: n }) };
    });
    const modules = ['Bookings calendar', 'Walk-in and phone bookings', 'Members', 'Points and tier adjustments', 'Wallet adjustments and refunds', 'Loyalty and rewards settings', 'Venues and pricing', 'Reports and exports', 'Staff and roles'];
    const matrix = {
      'Super Admin': ['Full', 'Full', 'Full', 'Full', 'Full', 'Full', 'Full', 'Full', 'Full'],
      'Venue Manager': ['Full', 'Full', 'Full', 'Full', 'View', 'View', 'Full', 'Full', 'None'],
      'Front Desk': ['Full', 'Full', 'View', 'None', 'None', 'None', 'View', 'None', 'None'],
      Finance: ['View', 'None', 'View', 'View', 'Full', 'None', 'View', 'Full', 'None']
    };
    const col = { Full: ['#DCFCE7', '#166534'], View: ['#DBEAFE', '#1E40AF'], None: ['#F3F4F6', '#374151'] };
    const perms = modules.map((m, i) => { const lv = matrix[st.role][i]; return { module: m, level: lv, bg: col[lv][0], fg: col[lv][1] }; });
    const audit = [
      { what: 'Adjusted points +50 for [Member A] (missing receipt)', who: '[Manager name]', when: 'Today, 2:41 PM' },
      { what: 'Blocked Court G3 3–4 PM (maintenance)', who: '[Staff name]', when: 'Today, 1:10 PM' },
      { what: 'Changed Silver top-up package to [RM X]', who: '[Admin name]', when: 'Yesterday, 6:02 PM' },
      { what: 'Refunded RM 20.00 to wallet for booking #[id]', who: '[Finance name]', when: 'Yesterday, 11:15 AM' },
      { what: 'Invited [Finance name] as Finance', who: '[Admin name]', when: '18 Oct 2026' }
    ];
    return { staff, roles, perms, audit };
  }

  componentDidMount() { document.title = "Back Office - Staff and roles"; }

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
          <Link to="/admin/pricing" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", color: "#D1D5DB", fontWeight: "600", fontSize: "14px"}}>
            {"Venues & pricing"}
          </Link>
          <Link to="/admin/staff" style={{height: "44px", padding: "0 12px", borderRadius: "10px", display: "flex", alignItems: "center", background: "#6D28D9", color: "#FFFFFF", fontWeight: "700", fontSize: "14px"}}>
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
            {"Staff & roles"}
          </h1>
          <button style={{height: "44px", padding: "0 18px", borderRadius: "10px", border: "none", background: "#6D28D9", color: "#FFFFFF", font: "inherit", fontWeight: "800", fontSize: "14px", cursor: "pointer"}}>
            {"+ Invite staff"}
          </button>
        </div>
        <main style={{padding: "24px 28px 48px", display: "flex", flexDirection: "column", gap: "20px"}}>
          <section style={{background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "8px 8px 12px", overflowX: "auto"}}>
            <table style={{width: "100%", minWidth: "760px", borderCollapse: "collapse", fontSize: "14px"}}>
              <thead>
                <tr>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"NAME"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"EMAIL"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"ROLE"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"VENUES"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"LAST LOGIN"}
                  </th>
                  <th scope="col" style={{textAlign: "left", padding: "12px", color: "#4B5563", fontSize: "12px"}}>
                    {"STATUS"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(v.staff || []).map((s: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <tr>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6", fontWeight: "800"}}>
                        {s.name}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        {s.email}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        <span style={{padding: "4px 8px", borderRadius: "6px", background: "#F5F3FF", color: "#5B21B6", fontSize: "12px", fontWeight: "800"}}>
                          {s.role}
                        </span>
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        {s.venues}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        {s.last}
                      </td>
                      <td style={{padding: "12px", borderTop: "1px solid #F3F4F6"}}>
                        <span style={{padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "800", background: s.stBg, color: s.stFg}}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </section>
          <div style={{display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start"}}>
            <section style={{flex: "2 1 520px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Role permissions"}
              </h2>
              <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}} role="tablist" aria-label="Roles">
                {(v.roles || []).map((r: any, $index: number) => (
                  <React.Fragment key={$index}>
                    <button role="tab" aria-selected={r.on} onClick={r.pick} style={{height: "42px", padding: "0 14px", borderRadius: "10px", font: "inherit", fontWeight: "700", fontSize: "14px", cursor: "pointer", border: r.border, background: r.bg, color: r.fg}}>
                      {r.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              <div style={{overflowX: "auto"}}>
                <table style={{width: "100%", minWidth: "520px", borderCollapse: "collapse", fontSize: "14px"}}>
                  <thead>
                    <tr>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"MODULE"}
                      </th>
                      <th scope="col" style={{textAlign: "left", padding: "10px", color: "#4B5563", fontSize: "12px"}}>
                        {"ACCESS"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(v.perms || []).map((p: any, $index: number) => (
                      <React.Fragment key={$index}>
                        <tr>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6", fontWeight: "600"}}>
                            {p.module}
                          </td>
                          <td style={{padding: "10px", borderTop: "1px solid #F3F4F6"}}>
                            <span style={{padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "800", background: p.bg, color: p.fg}}>
                              {p.level}
                            </span>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section style={{flex: "1 1 320px", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px"}}>
              <h2 style={{margin: "0", fontSize: "17px", fontWeight: "800"}}>
                {"Audit log"}
              </h2>
              {(v.audit || []).map((a: any, $index: number) => (
                <React.Fragment key={$index}>
                  <div style={{padding: "10px 0", borderTop: "1px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "2px"}}>
                    <span style={{fontSize: "14px", fontWeight: "700"}}>
                      {a.what}
                    </span>
                    <span style={{fontSize: "12px", color: "#4B5563"}}>
                      {a.who}{" \u00b7 "}{a.when}
                    </span>
                  </div>
                </React.Fragment>
              ))}
              <Link to="/admin/staff" style={{fontWeight: "700", fontSize: "14px", padding: "10px 0"}}>
                {"View full log"}
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
    );
  }
}
