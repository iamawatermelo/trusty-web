<script lang="ts">
    
</script>

{#snippet marker(text: string, background: string, foreground?: string)}
    {@const fg = foreground ?? `on-${background}`}
    <span aria-hidden="true" class="marker" style:background="var(--{background})" style:color="var(--{fg})">{text}</span>
{/snippet}

<main>
    <div class="information">
        <header>
            <h1>
                <span class="marker time">15:36</span>
                <span>Holyhead</span>
                <span>to Birmingham International</span>
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
                <div class="services">
                    <li>{@render marker("B", "marker-accomodation")} Standard class only</li>
                    <li>{@render marker("A", "marker-reservations")} Reservations available</li>
                    <li>{@render marker("T", "marker-catering")} Trolley service available</li>
                </div>
            </ul>
        </section>
            
        <section>
            <h2>Tracking information</h2>
            <ul>
                <div class="tracking-codes">
                    <li>TRUST ID <code>401I26MR19</code></li>
                    <li>Activated at <span>19 May 2025 14:36</span></li>
                </div>
                <div class="tracking-codes">
                    <li>UID <code>G55730</code></li>
                    <li>Identity <code>1I26</code></li>
                    <li>TSC <code>22340000</code></li>
                    <li>Headcode <code>3061</code></li>
                </div>
            </ul>
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
                    <th scope="col">Arrival</th>
                    <th scope="col">WTT</th>
                    <th scope="col">Departure</th>
                    <th scope="col" class="timetable-border">WTT</th>
                    
                    <!-- Realtime -->
                    <th scope="col">Arrival</th>
                    <th scope="col" class="timetable-border">Departure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <!-- Location -->
                    <td>{@render marker("HHD", "marker-crs")}</td>
                    <td>
                        <div class="timetable-location">
                            <p>
                                Holyhead
                            </p>
                            <div class="timetable-extra">
                                <div class="marker-related">
                                    {@render marker("80x", "marker-load")}
                                    {@render marker("125", "marker-load-alt", "on-marker-load")}
                                </div>
                                <p>
                                    Pathed as a Class 80x at 125mph
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="timetable-border">2</td>
                    
                    <!-- Timetable -->
                    <td></td>
                    <td></td>
                    <td>15:36</td>
                    <td class="timetable-border"></td>
                    
                    <!-- Realtime -->
                    <td></td>
                    <td class="timetable-border">15:36</td>
                    
                    <!-- Path/Line -->
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </article>
</main>

<style>
    /* Marker styles */
    .marker {
        font-family: "Trusty Mono", monospace;
        font-weight: 700;
        padding: 0 0.25em;
        line-height: 140%;
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
        gap: 0.25em;
    }
    
    .marker-related {
        display: inline-flex;
        gap: 0
    }
    
    main {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        
        padding: 2rem 4rem;
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
        }
        
        .time {
            background: black;
            color: white;
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
        }
        
        .marker-definitions li {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
        
        .tracking-codes {
            display: flex;
            flex-direction: row;
            gap: 2em;
            row-gap: 1em;
            
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
    
    /* Timetable styles */
    
    /* Layout */
    
    article {
        background: var(--card-bg);
        
        border: 1px solid var(--card-stroke);
        border-collapse: collapse;
        
        h2 {
            font-size: 1rem;
            padding: 1rem;
        }
    }
    
    table {
        display: grid;
        
        grid-auto-rows: min-content;
        grid-template-columns:
            [crs] min-content
            [location] auto
            [platform] 1em
            [tt-arrival] min-content
            [tt-arrival-wtt] min-content
            [tt-departure] min-content
            [tt-departure-wtt] min-content
            [rt-arrival] min-content
            [rt-departure] min-content
            [path] min-content
            [line] min-content
    }
    
    thead, tbody, tr {
        display: grid;
        
        grid-auto-rows: min-content;
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
    }
    
    thead {
        grid-template-rows: repeat(2, min-content);
    }
    
    tr {
        grid-template-rows: repeat(2, min-content);
        grid-row: 1 / span 2;
    }
    
    thead tr:first-child {
        .crs, .location, .platform, .path, .line {
            grid-row: 1 / span 2;
        }
        
        .timetable {
            grid-column: span 4;
        }
    }
    
    table, td, th {
        border: 0 solid var(--card-stroke);
    }
    
    table, td {
        border-collapse: collapse;
        border-top-width: 1px;
        border-bottom-width: 1px;
    }
    
    th, td {
        padding: 0.25em 0.5em;
        
        
        &.timetable-border {
            border-right-width: 1px;
        }
    }
    
    td:first-child, .timetable-header-start {
        padding-left: 1em;
    }
    
    th {
        vertical-align: bottom;
        text-align: left;
    }
    
    /* Detail */ 
    
    .timetable-extra {
        font-size: 0.8em;
        
        display: flex;
        flex-direction: row;
        gap: 0.25em;
    }
    
    .timetable-location {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
        
        column-span: 2;
    }
</style>