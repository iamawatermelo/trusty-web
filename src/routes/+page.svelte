<script lang="ts">
	import { type Snippet } from 'svelte';

    
</script>

{#snippet marker(text: string, background: string, foreground?: string)}
    {@const fg = foreground ?? `on-${background}`}
    <span aria-hidden="true" class="marker" style:background="var(--{background})" style:color="var(--{fg})">{text}</span>
{/snippet}

<div class="main-container">
<main>
    <div class="information">
        <header>
            <h1>
                <span class="marker time">15:36</span>
                <span>Holyhead</span>
                <span><span class="to">to</span> Birmingham International</span>
            </h1>
            
            <div class="markers">
                {@render marker("A175", "marker-headcode")}
                <div class="marker-group">
                    {@render marker("VAR", "marker-schedule")}
                    {@render marker("XX", "marker-type")}
                    <div class="marker-related">
                        {@render marker("80x", "marker-load")}
                        {@render marker("125", "marker-load-alt", "on-marker-load")}
                    </div>
                </div>
                <div class="marker-group">
                    {@render marker("B", "marker-accomodation")}
                    {@render marker("A", "marker-reservations")}
                    {@render marker("T", "marker-catering")}
                </div>
            </div>
            
            <p>Operated by Transport for Wales</p>
        </header>
        
        <section>
            <h2>Service details</h2>
            <ul class="marker-definitions">
                <li>
                    {@render marker("VAR", "marker-schedule")} Modified WTT schedule<br>
                    Applies 19 May 2025 to 23 May 2025<br>
                    Runs every day except Sunday
                </li>
                <li>{@render marker("XX", "marker-type")} Express passenger service</li>
                <li>
                    <div class="marker-related">
                        {@render marker("80x", "marker-load")}
                        {@render marker("125", "marker-load-alt", "on-marker-load")}
                    </div>
                    Pathed as Class 158/168/170/175 DMU at 90mph
                </li>
            </ul>
            <ul class="marker-definitions services">
                <li>{@render marker("B", "marker-accomodation")} Standard class only</li>
                <li>{@render marker("A", "marker-reservations")} Reservations available</li>
                <li>{@render marker("T", "marker-catering")} Trolley service available</li>
            </ul>
        </section>
            
        <section>
            <h2>Tracking information</h2>
            <div class="tracking-codes">
                <ul>
                    <li>TRUST ID <code>401I26MR19</code></li>
                    <li>Activated at <span>19 May 2025 14:36</span></li>
                </ul>
                <ul class="tracking-codes">
                    <li>UID <code>G55730</code></li>
                    <li>Identity <code>1I26</code></li>
                    <li>TSC <code>22340000</code></li>
                    <li>Headcode <code>3061</code></li>
                </ul>
            </div>
        </section>
    </div>
    
    <article>
        <h2>Timetable</h2>
        <table>
            <colgroup>
                <col span="2" />
                <col span="4" />
                <col span="4" />
                <col span="2" />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" rowspan="2" class="crs timetable-header-start">CRS</th>
                    <th scope="col" rowspan="2" class="location">Location</th>
                    <th scope="col" rowspan="2" class="platform timetable-border">Platform</th>
                    
                    <th scope="col" colspan="4" class="timetable timetable-border">Timetable</th>
                    
                    <th scope="col" colspan="2" class="realtime timetable-border">Realtime</th>
                    
                    <th scope="col" rowspan="2" class="path">Path</th>
                    <th scope="col" rowspan="2" class="line timetable-header-end">Line</th>
                </tr>
                <tr>
                    <!-- Timetable -->
                    <th scope="col" class="arrival-tt">Arrival</th>
                    <th scope="col" class="arrival-wtt wtt">WTT</th>
                    <th scope="col" class="departure-tt">Departure</th>
                    <th scope="col" class="departure-wtt wtt timetable-border">WTT</th>
                    
                    <!-- Realtime -->
                    <th scope="col" class="arrival-rt">Arrival</th>
                    <th scope="col" class="departure departure-rt timetable-border">Departure</th>
                </tr>
            </thead>
            <tbody>
                {#snippet timetableEntry(props: {
                    name: string,
                    crs?: string,
                    pass?: boolean,
                    platform?: string,
                    arrivalTtTime?: string,
                    arrivalWttTime?: string,
                    departureTtTime?: string,
                    departureWttTime?: string,
                    arrivalRtTime?: string,
                    departureRtTime?: string,
                    path?: string,
                    line?: string,
                    markerSnippet?: Snippet
                })}
                <tr class="timetable-entry-detail" class:pass={props.pass}>
                    <!-- Location -->
                    <td>
                        {#if props.crs}
                            <!-- I'm not using marker here because this should be read out by screen readers -->
                            <span class="marker crs" style:background="var(--marker-crs)" style:color="var(--on-marker-crs)">{props.crs}</span>
                        {/if}
                    </td>
                    <td class="timetable-location">
                        <p>
                            {props.name}
                        </p>
                        {#if props.markerSnippet}
                            <div class="timetable-detail">
                                {@render props.markerSnippet()}
                            </div>
                        {/if}
                    </td>
                    <td class="timetable-border platform">{props.platform}</td>
                    
                    <!-- Timetable -->
                    <td class="arrival time arrival-tt">{props.arrivalTtTime || "-"}</td>
                    <td class="wtt time arrival-wtt">
                        {#if props.arrivalWttTime != props.arrivalTtTime}
                            {props.arrivalWttTime}
                        {/if}
                    </td>
                    <td class="time departure-tt">{props.departureTtTime || "-"}</td>
                    <td class="wtt time timetable-border departure-wtt">
                        {#if props.departureWttTime != props.departureTtTime}
                            {props.departureWttTime}
                        {/if}
                    </td>
                    
                    <!-- Realtime -->
                    <td class="time arrival-rt">{props.arrivalRtTime}</td>
                    <td class="time timetable-border departure-rt">{props.departureRtTime}</td>
                    
                    <!-- Path/Line -->
                    <td>{props.path}</td>
                    <td>{props.line}</td>
                </tr>
                {/snippet}
                
                {#snippet timetableDetailPathedAs()}
                    <div class="marker-related">
                        {@render marker("D", "marker-load")}
                        {@render marker("90", "marker-load-alt", "on-marker-load")}
                    </div>
                    <p>Pathed as Class 158, 168, 170 or 175 DMU at 90mph</p>
                {/snippet}
                
                {@render timetableEntry({
                  name: "Holyhead",
                  crs: "HHD",
                  platform: "2",
                  departureTtTime: "15:36",
                  departureWttTime: "15:36",
                  departureRtTime: "15:36",
                  markerSnippet: timetableDetailPathedAs
                })}
                
                {#snippet timetableDetailUnadvertised()}
                    {@render marker("N", "marker-unadvertised-stop")}
                    <p>Unadvertised stop</p>
                {/snippet}
                
                {@render timetableEntry({
                  name: "Valley",
                  crs: "VAL",
                  arrivalWttTime: "15:41½",
                  departureWttTime: "15:42½",
                  markerSnippet: timetableDetailUnadvertised
                })}
                
                {#snippet timetableDetailRequestStop()}
                    {@render marker("R", "marker-request-stop")}
                    <p>Request stop</p>
                {/snippet}
                
                {@render timetableEntry({
                  name: "Ty Croes",
                  crs: "TYC",
                  arrivalTtTime: "15:48",
                  arrivalWttTime: "15:47½",
                  departureTtTime: "15:48",
                  departureWttTime: "15:48",
                  markerSnippet: timetableDetailRequestStop
                })}
                
                {@render timetableEntry({
                  name: "Bodorgan",
                  crs: "BOR",
                  arrivalTtTime: "15:56",
                  arrivalWttTime: "15:56",
                  departureTtTime: "15:56",
                  departureWttTime: "15:56½",
                  markerSnippet: timetableDetailRequestStop
                })}
                
                {@render timetableEntry({ name: "Gaerwen", arrivalWttTime: "16:03", pass: true, arrivalRtTime: "16:01" })}
                {@render timetableEntry({ name: "Llanfairpwll", crs: "LPG", arrivalTtTime: "16:06", arrivalWttTime: "16:06", departureTtTime: "16:07", departureWttTime: "16:07", arrivalRtTime: "16:05", departureRtTime: "16:07" })}
                {@render timetableEntry({ name: "Menai Bridge", arrivalWttTime: "16:10", pass: true })}
                {@render timetableEntry({ name: "Bangor (Gwynedd)", crs: "BNG", platform: "1", arrivalTtTime: "16:15", arrivalWttTime: "16:13½", departureTtTime: "16:15", departureWttTime: "16:15", arrivalRtTime: "16:12", departureRtTime: "16:15" })}
                {@render timetableEntry({ name: "Aber Ground Frame", arrivalWttTime: "16:20½", pass: true })}
                {@render timetableEntry({ name: "Llanfairfechan", crs: "LLF", arrivalTtTime: "16:23", arrivalWttTime: "16:23", departureTtTime: "16:24", departureWttTime: "16:24", arrivalRtTime: "16:23", departureRtTime: "16:25" })}
                {@render timetableEntry({ name: "Penmaenmawr", crs: "PMW", arrivalTtTime: "16:28", arrivalWttTime: "16:27½", departureTtTime: "16:28", departureWttTime: "16:28½", arrivalRtTime: "16:28", departureRtTime: "16:30" })}
                {@render timetableEntry({ name: "Conwy", crs: "CNW", arrivalTtTime: "16:34", arrivalWttTime: "16:34", departureTtTime: "16:35", departureWttTime: "16:35", arrivalRtTime: "16:35", departureRtTime: "16:37" })}
                {@render timetableEntry({ name: "Llandudno Junction", crs: "LLJ", platform: "3", arrivalTtTime: "16:39", arrivalWttTime: "16:38", departureTtTime: "16:40", departureWttTime: "16:40", arrivalRtTime: "16:39", departureRtTime: "16:41" })}
                {@render timetableEntry({ name: "Colwyn Bay", crs: "CWB", platform: "2", arrivalTtTime: "16:45", arrivalWttTime: "16:46", departureTtTime: "16:46", departureWttTime: "16:46½", arrivalRtTime: "16:46", departureRtTime: "16:47" })}
                {@render timetableEntry({ name: "Llysfaen Emergency Gf", arrivalWttTime: "16:48½", pass: true })}
                {@render timetableEntry({ name: "Abergele & Pensarn", crs: "AGL", platform: "1", arrivalTtTime: "16:51", arrivalWttTime: "16:51½", arrivalRtTime: "16:54" })}
                {@render timetableEntry({ name: "Rhyl", crs: "RHL", platform: "1", arrivalTtTime: "16:45", arrivalWttTime: "16:45", departureTtTime: "16:57", departureWttTime: "16:57", arrivalRtTime: "16:57", departureRtTime: "16:59" })}
                {@render timetableEntry({ name: "Rhyl Jn", arrivalWttTime: "16:58", pass: true, arrivalRtTime: "16:59" })}
                {@render timetableEntry({ name: "Prestatyn", crs: "PRT", platform: "1", arrivalTtTime: "17:03", arrivalWttTime: "17:01½", departureTtTime: "17:03", departureWttTime: "17:03", arrivalRtTime: "17:04", departureRtTime: "17:17" })}
                {@render timetableEntry({ name: "Mostyn West Jn", arrivalWttTime: "17:08½", pass: true, arrivalRtTime: "17:23" })}
                {@render timetableEntry({ name: "Mostyn Signal Box", arrivalWttTime: "17:08½", pass: true, arrivalRtTime: "17:23" })}
                {@render timetableEntry({ name: "Mostyn East Jn", arrivalWttTime: "17:09", pass: true, arrivalRtTime: "17:24" })}
                {@render timetableEntry({ name: "Holywell Jn", arrivalWttTime: "17:11", pass: true, arrivalRtTime: "17:26" })}
                {@render timetableEntry({ name: "Flint", crs: "FLN", platform: "1", arrivalTtTime: "17:16", arrivalWttTime: "17:15", departureTtTime: "17:16", departureWttTime: "17:16½", arrivalRtTime: "17:29", departureRtTime: "17:31" })}
                {@render timetableEntry({ name: "Flint Jn", arrivalWttTime: "17:17½", pass: true, arrivalRtTime: "17:32" })}
                {@render timetableEntry({ name: "Rockcliffe Hall", arrivalWttTime: "17:19", pass: true, arrivalRtTime: "17:34" })}
                {@render timetableEntry({ name: "Shotton", crs: "SHT", platform: "1", arrivalTtTime: "17:20", arrivalWttTime: "17:20½", departureTtTime: "17:21", departureWttTime: "17:21", arrivalRtTime: "17:35", departureRtTime: "17:36" })}
                {@render timetableEntry({ name: "Sandycroft", arrivalWttTime: "17:22½", pass: true, arrivalRtTime: "17:37" })}
                {@render timetableEntry({ name: "Saltney Jn", arrivalWttTime: "17:26½", pass: true, arrivalRtTime: "17:42" })}
                {@render timetableEntry({ name: "Roodee Jn", arrivalWttTime: "17:27½", pass: true, arrivalRtTime: "17:43" })}
            </tbody>
        </table>
    </article>
</main>
</div>

<style>
    .main-container {
        container-name: main;
        container-type: inline-size;
    }
    
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        
        padding: 4rem 2rem;
        
        @container main (max-width: 64rem) {
            flex-direction: column;
        }
        
        @container main (max-width: 32rem) {
            padding: 2rem 1rem;
        }
    }
    
    .information {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        h1 {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            
            .to {
                font-weight: 500;
            }
        }
        
        .time {
            background: var(--fg);
            color: var(--bg);
            font-weight: 700;
            font-size: 1.5rem;
        }
    }
    
    section {
        display: flex;
        flex-direction: column;
        gap: 1em;
        
        padding: 1em;
        
        background: var(--card-bg);
        border: 1px solid var(--card-stroke);
        
        font-size: 0.8em;
        line-height: 150%;
        
        h2 {
            font-size: 1rem;
            font-weight: 600;
        }
        
        ul {
            display: flex;
            flex-direction: column;
            gap: 1em;
            
            &.services {
                gap: 0.25em;
            }
        }
        
        .marker-definitions li {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
        
        .tracking-codes {
            display: flex;
            flex-direction: column;
            gap: 1em;
            
            ul {
                display: flex;
                flex-direction: row;
                gap: 2em;
                
                li {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    
                    font-weight: bold;
                    
                    & > * {
                        font-weight: normal;
                    }
                }
            }
        }
    }
    
    /* Marker styles */
    
    .marker {
        font-family: "Trusty Mono", monospace;
        font-weight: 700;
        padding: 0 0.25em;
        line-height: 120%;
        width: min-content;
        height: min-content;
        user-select: none;
    }
    
    .markers, .marker-group, .marker-related {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    
    .marker-group {
        gap: 0.25rem;
    }
    
    .marker-related {
        display: inline-flex;
        gap: 0
    }
    
    /* Timetable styles */
    
    /* Border and padding */
    
    article {
        width: 100%;
        max-width: 64rem;
        
        background: var(--card-bg-light);
        
        border: 1px solid var(--card-stroke);
        border-collapse: collapse;
        
        h2 {
            font-size: 1rem;
            font-weight: 600;
            
            padding: 1rem;
        }
    }
    
    tr.pass {
        background: var(--card-bg);
    }
    
    table, td, th, thead {
        border: 0 solid var(--card-stroke);
        border-collapse: collapse;
    }
    
    table {
        border-top-width: 1px;
        
        font-size: 0.8em;
    }
    
    td {
        border-bottom-width: 1px;
    }
    
    th, td {
        padding: 0.25em 0.5em;
        
        &.timetable-border {
            border-right-width: 1px;
        }
    }
    
    th {
        font-weight: 500;
        
        &.timetable, &.realtime {
            font-weight: 600;
        }
    }
    
    thead {
        border-bottom-width: 1px;
    }
    
    /* Give the first and last cells more padding, because we didn't add
       it to the article element */
    
    td:first-child, .timetable-header-start {
        padding-left: 1em;
        padding-right: 0;
    }
    
    td:last-child, .timetable-header-end {
        padding-right: 1em;
        padding-left: 0;
    }
    
    /* Also align the CRS */
    
    td:first-child {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    
    /* Time styles */ 
    
    .time {
        font-family: "Trusty Mono", monospace;
        font-weight: 600;
        
        text-align: left;
        
        &.wtt {
            font-weight: 300;
        }
    }
    
    th.wtt {
        font-weight: 300;
        text-align: right;
    }
    
    th.departure {
        display: flex;
        flex-direction: row;
        justify-content: end;
        
        text-align: right;
    }
    
    /* Grid layout */
    
    table {
        display: grid;
        
        grid-template-columns:
            [crs] min-content
            [location] auto
            [platform] min-content
            [tt-arrival] 4rem
            [tt-arrival-wtt] 4rem
            [tt-departure] 4rem
            [tt-departure-wtt] 4rem
            [rt-arrival] 4rem
            [rt-departure] 4rem;
    }
    
    thead, tbody, tr {
        display: grid;
        
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
    }
    
    thead {
        grid-template-rows: repeat(2, calc(1lh + 0.5rem));
    }
    
    tr {
        grid-template-rows: subgrid;
    }
    
    thead tr:first-child {
        grid-row: 1 / span 2;
        
        /* There's a gap in the outline above the platform
           indicator. Use ::after to fix this. */
        
        &::before {
            content: "";
            display: block;
            
            grid-area: 1 / 3;
            
            border-right: 1px solid var(--card-stroke);
        }
        
        .crs, .location, .platform {
            grid-row: 2 / span 1;
        }
        
        .path, .line {
            display: none;
        }
        
        .path {
            grid-column: path;
        }
        
        .line {
            grid-column: line;
        }
        
        .timetable {
            grid-column: 4 / span 4;
        }
        
        .realtime {
            grid-column: span 2;
        }
    }
    
    thead tr:last-child {
        grid-column: 4 / -1;
        grid-row: 2 / span 1;
    }
    
    th {
        vertical-align: bottom;
        text-align: left;
    }
    
    /*  Okay, this is the worst thing I've ever done. 
        I want to turn this: 
        
            [arrival tt] [arrival wtt] [departure tt] [departure wtt]
        
        Into this: 
        
            [arrival tt] [arrival wtt]
            [departure tt] [departure wtt]
        
        Wish me luck. */
    
    @container main (max-width: 32rem) {
        table {
            grid-template-columns:
                [crs] min-content
                [location] auto
                [platform] 2rem
                [tt] 4rem
                [tt-wtt] 3rem
                [rt] 6rem
                [path] min-content
                [line] min-content;
        }
        
        thead {
            grid-template-rows: repeat(3, calc(1lh + 0.5rem));
            
            tr:first-child {
                grid-row: 1 / span 3;
                
                /* Patch more gaps in the outline... */
                
                &::before {
                    grid-area: 1 / 3 / span 2 / span 1;
                }
                
                .crs, .location, .platform, .path, .line {
                    grid-row: 3;
                }
                
                .platform {
                    display: flex;
                    flex-direction: row;
                    justify-content: right;
                }
                
                .timetable {
                    grid-column: 4 / span 2;
                }
                
                .realtime {
                    grid-column: 6 / span 1;
                }
            }
            
            tr:last-child {
                grid-row: 2 / span 2;
                
                & > * {
                    grid-row: 3;
                }
                
                .arrival-tt, .arrival-wtt, .arrival-rt {
                    grid-row: 1;
                }
                
                .departure-rt {
                    justify-content: start;
                }
                
                .arrival-wtt, .arrival-rt {
                    border-right: 1px solid var(--card-stroke);
                }
            }
        }
    }
    
    /* Detail */ 
    
    tbody .platform {
        text-align: right;
    }
    
    .timetable-entry-detail {
        grid-row: span 2;
        grid-row: repeat(2, min-content);
        
        & > * {
            grid-row: 1;
        }
        
        .platform {
            grid-column: platform;
        }
        
        .timetable-detail {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.25em;
            
            padding-top: 0.25rem;
            
            grid-row: 2;
            grid-column: span 2;
            
            font-size: 0.7rem;
            
            & > p {
                /* text-transform: uppercase; */
                font-weight: 500;
                opacity: 0.6
            }
        }
        
        /* Shrink the font even more when the container is small to 
           free up space for mobile users. This may cause accessibility
           issues. */
        
        @container main (max-width: 32em) {
            table {
                font-size: 0.75rem;
            }
            
            .crs {
                font-size: 0.7rem;
                font-weight: 600;
            }
        }
    }
    
    .timetable-location {
        display: grid;
        
        grid-column: 2 / span 2;
        grid-template-columns: subgrid;
        
        & > p {
            font-weight: 500;
        }
    }
</style>