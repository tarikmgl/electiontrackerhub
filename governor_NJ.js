window.renderNewJerseyGovernor = function () {
    const candidates = [
        { key: "Sherrill", color: "#0a4aa6" },
        { key: "Ciattarelli", color: "#d62828" },
        { key: "Other", color: "#9a9797" }
    ];

    const pollSources = [
        { source: "InsiderAdvantage (R) / Trafalgar Group (R)", dates: "Oct 14–15, 2025", sample: "800 (LV)", moe: "±3.5%", Sherrill: 45, Ciattarelli: 44, Other: 4, Undecided: 7, bias: "R" },
        { source: "Fairleigh Dickinson University", dates: "Oct 9–15, 2025", sample: "814 (RV)", moe: "±3.4%", Sherrill: 52, Ciattarelli: 45, Other: 0, Undecided: 3, bias: "N" },
        { source: "Beacon Research (D) / Shaw & Company Research (R)", dates: "Oct 10–14, 2025", sample: "869 (LV)", moe: "±3.0%", Sherrill: 50, Ciattarelli: 45, Other: 0, Undecided: 5, bias: "N" },
        { source: "Beacon Research (D) / Shaw & Company Research (R)", dates: "Oct 10–14, 2025", sample: "1,002 (RV)", moe: "–", Sherrill: 48, Ciattarelli: 44, Other: 0, Undecided: 8, bias: "N" },
        { source: "Quinnipiac University", dates: "Oct 9–13, 2025", sample: "1,327 (LV)", moe: "±3.6%", Sherrill: 50, Ciattarelli: 44, Other: 2, Undecided: 4, bias: "N" },
        { source: "Rasmussen Reports (R)", dates: "Oct 8–9, 2025", sample: "955 (LV)", moe: "±3.0%", Sherrill: 46, Ciattarelli: 40, Other: 4, Undecided: 9, bias: "R" },
        { source: "Neighborhood Research (R)", dates: "Oct 6–9, 2025", sample: "311 (LV)", moe: "±5.6%", Sherrill: 44, Ciattarelli: 44, Other: 0, Undecided: 12, bias: "R" },
        { source: "Public Policy Polling (D)", dates: "Oct 2–3, 2025", sample: "703 (RV)", moe: "±3.7%", Sherrill: 49, Ciattarelli: 43, Other: 0, Undecided: 8, bias: "D" },
        { source: "John Zogby Strategies (D)", dates: "Sep 30–Oct 2, 2025", sample: "912 (LV)", moe: "±3.3%", Sherrill: 50, Ciattarelli: 42, Other: 0, Undecided: 8, bias: "D" },
        { source: "Quantus Insights (R)", dates: "Sep 29–30, 2025", sample: "900 (LV)", moe: "±3.3%", Sherrill: 48, Ciattarelli: 46, Other: 0, Undecided: 6, bias: "R" },
        { source: "Beacon Research (D) / Shaw & Co (R)", dates: "Sep 25–28, 2025", sample: "822 (LV)", moe: "±3.0%", Sherrill: 50, Ciattarelli: 42, Other: 0, Undecided: 8, bias: "N" },
        { source: "Global Strategy Group (D)", dates: "Sep 22–25, 2025", sample: "800 (LV)", moe: "±3.5%", Sherrill: 50, Ciattarelli: 43, Other: 0, Undecided: 7, bias: "D" },
        { source: "Valcour / Save Jersey (R)", dates: "Sep 23–24, 2025", sample: "1,274 (LV)", moe: "±2.8%", Sherrill: 47, Ciattarelli: 45, Other: 0, Undecided: 7, bias: "R" },
        { source: "Emerson College", dates: "Sep 22–23, 2025", sample: "935 (LV)", moe: "±3.1%", Sherrill: 43, Ciattarelli: 43, Other: 3, Undecided: 11, bias: "N" },
        { source: "Yes. Every Kid.", dates: "Sep 20–22, 2025", sample: "704 (LV)", moe: "±3.7%", Sherrill: 48, Ciattarelli: 41, Other: 0, Undecided: 10, bias: "N" },
        { source: "National Research Inc. (R)", dates: "Sep 16–18, 2025", sample: "600 (LV)", moe: "±4.0%", Sherrill: 45, Ciattarelli: 46, Other: 0, Undecided: 9, bias: "R" },
        { source: "Quinnipiac University", dates: "Sep 11–15, 2025", sample: "1,238 (LV)", moe: "±3.9%", Sherrill: 49, Ciattarelli: 41, Other: 2, Undecided: 6, bias: "N" },
        { source: "Quantus Insights (R)", dates: "Sep 2–4, 2025", sample: "600 (LV)", moe: "±4.3%", Sherrill: 47, Ciattarelli: 37, Other: 0, Undecided: 16, bias: "R" },
        { source: "TIPP Insights (R)", dates: "Aug 25–28, 2025", sample: "1,349 (LV)", moe: "±3.0%", Sherrill: 46, Ciattarelli: 39, Other: 2, Undecided: 12, bias: "R" },
        { source: "Rutgers–Eagleton", dates: "Jul 31–Aug 11, 2025", sample: "1,650 (LV)", moe: "±3.7%", Sherrill: 44, Ciattarelli: 35, Other: 3, Undecided: 17, bias: "N" },
        { source: "A2 Insights", dates: "Jul 29–Aug 2, 2025", sample: "629 (LV)", moe: "–", Sherrill: 51, Ciattarelli: 45, Other: 0, Undecided: 4, bias: "N" },
        { source: "StimSight Research", dates: "Jul 18–24, 2025", sample: "1,108 (LV)", moe: "±3.3%", Sherrill: 48, Ciattarelli: 42, Other: 1, Undecided: 9, bias: "N" },
        { source: "Fairleigh Dickinson University", dates: "Jul 17–23, 2025", sample: "806 (LV)", moe: "±3.4%", Sherrill: 45, Ciattarelli: 37, Other: 3, Undecided: 15, bias: "N" },
        { source: "Cygnal (R)", dates: "Jun 19–20, 2025", sample: "500 (LV)", moe: "±4.4%", Sherrill: 50, Ciattarelli: 43, Other: 0, Undecided: 7, bias: "R" },
        { source: "SurveyUSA (D)", dates: "May 28–30, 2025", sample: "576 (LV)", moe: "±6.1%", Sherrill: 51, Ciattarelli: 38, Other: 0, Undecided: 12, bias: "D" },
    ];

    
    const windowDays = 30; 
    const bandwidth = 0.35; 
    function loess(data, xAcc, yAcc, bw = 0.35) {
        const smoothed = [];
        const n = data.length;
        for (let i = 0; i < n; i++) {
            const x0 = xAcc(data[i]);
            const dist = data.map(d => Math.abs(xAcc(d) - x0));
            const sorted = dist.slice().sort((a, b) => a - b);
            const dmax = sorted[Math.floor(bw * n)];
            const weights = dist.map(d => {
                const u = Math.abs(d / dmax);
                return u < 1 ? (1 - u ** 3) ** 3 : 0;
            });
            const sumW = d3.sum(weights);
            const meanX = d3.sum(data.map((d, j) => xAcc(d) * weights[j])) / sumW;
            const meanY = d3.sum(data.map((d, j) => yAcc(d) * weights[j])) / sumW;
            let num = 0, den = 0;
            for (let j = 0; j < n; j++) {
                const xi = xAcc(data[j]) - meanX;
                num += weights[j] * xi * (yAcc(data[j]) - meanY);
                den += weights[j] * xi * xi;
            }
            const beta = num / den;
            const alpha = meanY - beta * meanX;
            smoothed.push({ x: x0, y: alpha + beta * x0 });
        }
        return smoothed;
    }

    function weightedMovingAverage(data, xAcc, yAcc, windowDays = 30) {
        const sorted = data.sort((a, b) => xAcc(a) - xAcc(b));
        const result = [];
        for (let i = 0; i < sorted.length; i++) {
            const cur = xAcc(sorted[i]);
            const cutoff = cur - windowDays * 24 * 60 * 60 * 1000;
            const window = sorted.filter(d => xAcc(d) >= cutoff && xAcc(d) <= cur);
            const weights = window.map((_, j) => j + 1);
            const sumW = d3.sum(weights);
            const avg = d3.sum(window.map((d, j) => yAcc(d) * weights[j])) / sumW;
            result.push({ x: cur, y: avg });
        }
        return result;
    }

    function loessInterp(smooth, date) {
        const x = date.getTime();
        if (x <= smooth[0].x) return smooth[0].y;
        if (x >= smooth.at(-1).x) return smooth.at(-1).y;
        for (let i = 1; i < smooth.length; i++) {
            const x1 = smooth[i - 1].x, x2 = smooth[i].x;
            if (x >= x1 && x <= x2) {
                const t = (x - x1) / (x2 - x1);
                return smooth[i - 1].y + t * (smooth[i].y - smooth[i - 1].y);
            }
        }
        return smooth.at(-1).y;
    }

    function aggregateBiasAdjusted(polls, candidates, halfLifeDays = 20) {
        const now = new Date();
        const τ = halfLifeDays / Math.log(2);
        const groups = { D: [], R: [], N: [] };
        polls.forEach(p => {
            const bias = p.bias || "N";
            groups[bias] = groups[bias] || [];
            groups[bias].push(p);
        });
        const meanDiff = arr => arr.length ? d3.mean(arr.map(p => (p.Sherrill ?? 0) - (p.Ciattarelli ?? 0))) : 0;
        const meanN = meanDiff(groups.N);
        const offsetR = meanDiff(groups.R) - meanN;
        const offsetD = meanDiff(groups.D) - meanN;

        const adjusted = polls.map(p => {
            const adj = { ...p };
            if (p.bias === "R") { adj.Sherrill -= offsetR; adj.Ciattarelli += offsetR; }
            if (p.bias === "D") { adj.Sherrill -= offsetD; adj.Ciattarelli += offsetD; }
            return adj;
        });

        const totals = {};
        candidates.forEach(c => totals[c.key] = { sum: 0, weight: 0 });
        adjusted.forEach(p => {
            const n = parseInt(p.sample?.match(/\d+/)?.[0]) || 500;
  
            let d = null;
            if (p.date) {
                d = new Date(p.date);
            } else if (p.dates) {
                
                const match = p.dates.match(/([A-Za-z]+)\s*(\d{1,2})/g);
                if (match) {
                    const last = match.at(-1).replace(/–|-/g, ' ');
                    d = new Date(last + ", 2025");
                }
            }
            if (isNaN(d)) d = new Date("2025-10-01"); 

            const daysAgo = (now - d) / (1000 * 60 * 60 * 24);
            const w = n * Math.exp(-daysAgo / τ);
            candidates.forEach(c => {
                const val = p[c.key];
                if (!isNaN(val)) {
                    totals[c.key].sum += val * w;
                    totals[c.key].weight += w;
                }
            });
        });
        return candidates.map(c => ({
            key: c.key,
            avg: totals[c.key].weight > 0
                ? totals[c.key].sum / totals[c.key].weight
                : 0,
            color: c.color
        }));
    }

    function getRaceRating() {
        const avg = aggregateBiasAdjusted(pollSources, candidates);
        const dem = avg.find(d => d.key === "Sherrill").avg;
        const rep = avg.find(d => d.key === "Ciattarelli").avg;
        const margin = dem - rep;

        let rating = "", color = "";

        if (Math.abs(margin) < 2) { rating = "Tossup"; color = "#9ca3af"; }
        else if (margin >= 10) { rating = "Solid D"; color = "#0a4aa6"; }
        else if (margin >= 6) { rating = "Likely D"; color = "#2563eb"; }
        else if (margin >= 2) { rating = "Lean D"; color = "#3b82f6"; }
        else if (margin <= -10) { rating = "Solid R"; color = "#b91c1c"; }
        else if (margin <= -6) { rating = "Likely R"; color = "#dc2626"; }
        else if (margin <= -2) { rating = "Lean R"; color = "#ef4444"; }

        return { rating, color, margin: margin.toFixed(1) };
    }


    const polls = pollSources.map(p => {
        const match = p.dates.match(/([A-Za-z]+)\s*(\d{1,2})/g);
        const last = match ? match.at(-1) : "Oct 1";
        const fullDate = new Date(`${last}, 2025`);
        return {
            date: d3.timeFormat("%Y-%m-%d")(fullDate),
            Sherrill: p.Sherrill,
            Ciattarelli: p.Ciattarelli,
            Other: p.Other ?? 0,
            bias: p.bias,
            sample: p.sample,
            source: p.source
        };
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); 

    function renderHybridTrend() {
        const svg = d3.select("#trend-chart");
        svg.selectAll("*").remove();

        const width = 960, height = 480;
        const margin = { top: 50, right: 60, bottom: 40, left: 60 };
        svg.attr("viewBox", [0, 0, width, height]);

        const parseDate = d3.timeParse("%Y-%m-%d");
        polls.forEach(p => p.dateObj = parseDate(p.date));

        const x = d3.scaleTime()
            .domain(d3.extent(polls, d => d.dateObj))
            .range([margin.left, width - margin.right]);

        const y = d3.scaleLinear()
            .domain([30, d3.max(polls, d => d3.max(candidates, c => d[c.key])) + 5])
            .nice()
            .range([height - margin.bottom, margin.top]);

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(8).tickSize(-height + margin.top + margin.bottom).tickFormat(""))
            .selectAll("line").attr("stroke", "#e5e7eb");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(6).tickSize(-width + margin.left + margin.right).tickFormat(""))
            .selectAll("line").attr("stroke", "#e5e7eb");

        candidates.forEach(c => {
            const data = polls.map(p => ({ dateObj: p.dateObj, value: p[c.key] }));
            const wma = weightedMovingAverage(data, d => d.dateObj.getTime(), d => d.value, windowDays);
            const smooth = loess(wma, d => d.x, d => d.y, bandwidth);
            c.smooth = smooth;

            const line = d3.line()
                .x(d => x(new Date(d.x)))
                .y(d => y(d.y))
                .curve(d3.curveCatmullRom);

            svg.append("path").datum(smooth)
                .attr("fill", "none")
                .attr("stroke", c.color)
                .attr("stroke-width", 2.8)
                .attr("d", line);

            const area = d3.area()
                .x(d => x(new Date(d.x)))
                .y0(d => y(d.y - 1.2))
                .y1(d => y(d.y + 1.2))
                .curve(d3.curveCatmullRom);

            svg.append("path").datum(smooth)
                .attr("fill", c.color + "20")
                .attr("d", area);
        });

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(6).tickFormat(d3.timeFormat("%b %d")))
            .selectAll("text").attr("fill", "#374151").attr("font-size", "12px");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(6).tickFormat(d => d + "%"))
            .selectAll("text").attr("fill", "#374151").attr("font-size", "12px");

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", 28)
            .attr("text-anchor", "middle")
            .attr("font-size", "20px")
            .attr("font-weight", "700")
            .attr("fill", "#0a2472")
            .text("Trend Line (Hybrid)");

        let tooltip = d3.select("#poll-tooltip");
        if (tooltip.empty()) {
            tooltip = d3.select("body").append("div")
                .attr("id", "poll-tooltip")
                .style("position", "fixed")
                .style("top", "20px")
                .style("right", "20px")
                .style("background", "white")
                .style("border", "1px solid #d1d5db")
                .style("border-radius", "10px")
                .style("padding", "10px 12px")
                .style("box-shadow", "0 3px 10px rgba(0,0,0,0.1)")
                .style("font-family", "Inter, sans-serif")
                .style("font-size", "13px")
                .style("opacity", 0)
                .style("transition", "opacity .15s ease");
        }

        const focusLine = svg.append("line")
            .attr("stroke", "#9ca3af")
            .attr("stroke-width", 1)
            .attr("y1", margin.top)
            .attr("y2", height - margin.bottom)
            .style("opacity", 0);

        svg.append("rect")
            .attr("fill", "transparent")
            .attr("x", margin.left)
            .attr("y", margin.top)
            .attr("width", width - margin.left - margin.right)
            .attr("height", height - margin.top - margin.bottom)
            .on("mousemove", event => {
                const [mx] = d3.pointer(event);
                const date = x.invert(mx);
                focusLine.attr("x1", mx).attr("x2", mx).style("opacity", 1);

                let html = `<b>${d3.timeFormat("%b %d, %Y")(date)}</b><br>`;
                candidates.forEach(c => {
                    const yNow = loessInterp(c.smooth, date);
                    const yPast = loessInterp(c.smooth, new Date(date.getTime() - 30 * 864e5));
                    const delta = yNow - yPast;
                    const color = delta > 0 ? "#16a34a" : delta < 0 ? "#dc2626" : "#6b7280";
                    const deltaStr = `${delta > 0 ? "+" : ""}${delta.toFixed(1)}%`;
                    html += `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">
          <span style="color:${c.color};font-weight:600">${c.key}</span>
          <span>${yNow.toFixed(1)}% 
            <span style="color:${color};font-weight:600">${deltaStr}</span>
          </span>
        </div>`;
                });
                html += `<div style="margin-top:4px;color:#6b7280;font-style:italic;">Momentum vs 30d ago</div>`;
                tooltip.html(html).style("opacity", 1);
            })
            .on("mouseleave", () => {
                focusLine.style("opacity", 0);
                tooltip.style("opacity", 0);
            });

        const prediction = getRaceRating();
        svg.append("foreignObject")
            .attr("x", width - 240)
            .attr("y", margin.top)
            .attr("width", 180)
            .attr("height", 100)
            .html(`
    <div xmlns="http://www.w3.org/1999/xhtml" style="
      background:${prediction.color}15;
      border:2px solid ${prediction.color};
      border-radius:12px;
      padding:8px 12px;
      font-family:Inter, sans-serif;
      text-align:center;
      box-shadow:0 2px 8px rgba(0,0,0,.05);
    ">
      <div style="font-weight:700;color:${prediction.color};font-size:16px;">
        ${prediction.rating}
      </div>
      <div style="color:#111827;font-size:13px;margin-top:2px;">
        Margin: ${prediction.margin}%
      </div>
      <div style="color:#6b7280;font-size:11px;margin-top:3px;">
        (Bias-adjusted)
      </div>
    </div>
  `);

    }

    function renderAggregate() {
        const svg = d3.select("#bar-chart");
        svg.selectAll("*").remove();
        const width = 740, height = 300;
        const margin = { top: 55, right: 70, bottom: 30, left: 150 };
        svg.attr("viewBox", [0, 0, width, height]);

        const avg = aggregateBiasAdjusted(pollSources, candidates);

        const defs = svg.append("defs");
        avg.forEach(d => {
            const grad = defs.append("linearGradient")
                .attr("id", `grad-${d.key.replace(/[^a-zA-Z]/g, '')}`)
                .attr("x1", "0%").attr("x2", "100%");
            grad.append("stop").attr("offset", "0%").attr("stop-color", d.color);
            grad.append("stop").attr("offset", "100%").attr("stop-color", d3.color(d.color).darker(0.6));
        });

        const y = d3.scaleBand()
            .domain(avg.map(d => d.key))
            .range([margin.top, height - margin.bottom])
            .padding(0.35);

        const x = d3.scaleLinear()
            .domain([0, d3.max(avg, d => d.avg) + 5])
            .range([margin.left, width - margin.right]);

        svg.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", width).attr("height", height)
            .attr("fill", "#f9fafb");

        svg.selectAll(".bar")
            .data(avg)
            .enter()
            .append("rect")
            .attr("x", margin.left)
            .attr("y", d => y(d.key))
            .attr("width", 0) // animate from 0
            .attr("height", y.bandwidth())
            .attr("rx", 12)
            .style("fill", d => `url(#grad-${d.key.replace(/[^a-zA-Z]/g, '')})`)
            .style("filter", "drop-shadow(0 2px 5px rgba(0,0,0,0.15))")
            .transition()
            .duration(800)
            .attr("width", d => x(d.avg) - margin.left)
            .ease(d3.easeCubicOut);

        svg.selectAll(".label")
            .data(avg)
            .enter()
            .append("text")
            .attr("x", margin.left - 12)
            .attr("y", d => y(d.key) + y.bandwidth() / 1.6)
            .attr("text-anchor", "end")
            .attr("font-weight", 700)
            .attr("font-family", "Inter, sans-serif")
            .attr("font-size", "15px")
            .attr("fill", "#1f2937")
            .text(d => d.key);

        svg.selectAll(".value")
            .data(avg)
            .enter()
            .append("text")
            .attr("x", d => x(d.avg) + 10)
            .attr("y", d => y(d.key) + y.bandwidth() / 1.6)
            .attr("font-size", "17px")
            .attr("font-weight", 800)
            .attr("font-family", "Inter, sans-serif")
            .attr("fill", "#111827")
            .text(d => d.avg.toFixed(1) + "%");

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", margin.top - 25)
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("font-family", "Inter, sans-serif")
            .attr("font-weight", 700)
            .attr("fill", "#0a2472")
            .text("Current Polling Aggregate (as of October 2025)");

        svg.append("text")
            .attr("x", width - margin.right)
            .attr("y", margin.top - 25)
            .attr("text-anchor", "end")
            .attr("font-size", "13px")
            .attr("fill", "#6b7280")
            .text("Bias-adjusted");
    }



    function renderFullTable() {
        const container = d3.select("#poll-source-table");
        container.html("");
        const table = container.append("table");
        const thead = table.append("thead");
        const tbody = table.append("tbody");
        thead.append("tr").selectAll("th")
            .data(["Poll Source", "Date(s)", "Sample", "MoE", "Sherrill (D)", "Ciattarelli (R)", "Other", "Undecided"])
            .enter().append("th").text(d => d);
        const rows = tbody.selectAll("tr").data(pollSources).enter().append("tr");
        rows.selectAll("td").data(d => [d.source, d.dates, d.sample, d.moe, d.Sherrill + "%", d.Ciattarelli + "%", d.Other + "%", d.Undecided + "%"])
            .enter().append("td").text(d => d);
    }

    renderHybridTrend();

    renderAggregate();
    renderFullTable();


};