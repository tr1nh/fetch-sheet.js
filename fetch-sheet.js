var fetchSheet = {
  async fetch({ gSheetId, wSheetName, range, query, accessToken }) {
    let url = `https://docs.google.com/spreadsheets/d/${gSheetId}/gviz/tq?tqx=out:csv`;
    if (wSheetName) url += `&sheet=${wSheetName}`;
    if (range) url += `&range=${range}`;
    if (query) url += `&tq=${query}`;
    if (accessToken) url += `&access_token=${accessToken}`;

    // fetch Google Visualization API
    let response = await fetch(url);
    if (response.status != 200) return [];

    // parse csv to json
    let body = await response.text();
    let { header, rows } = this.parseCsv(body);

    return this.array2Json(rows, header);
  },

  parseCsv(data) {
    let rows = data
      .slice(1, data.length - 1)
      .split(/\"\n\"/)
      .map((row) => row.split('","'));

    let header = rows.splice(0, 1)[0];
    header = header.reduce((a, c, i) => ({ ...a, [c]: i }), {});

    return { header, rows };
  },

  array2Json(data, map) {
    return data.map((row) =>
      row.reduce((a, c, i) => ({ ...a, [Object.keys(map)[i]]: row[i] }), {})
    );
  },
};
