/**
 * Aqua Line - Master Plumbing Services Catalog Data
 * Centralized, editable data structure for all 8 categories and 59 services.
 * Set `enabled: false` on any service or category to quickly disable it if not offered.
 */

const SERVICES_DATA = [
    {
        id: "cat-general",
        name: "General Plumbing",
        shortName: "General",
        badge: "Core Essentials",
        icon: "lucide:wrench",
        color: "#ef233c",
        description: "Foundational maintenance, emergency repairs, and complete plumbing system installations for residential and commercial properties.",
        enabled: true,
        services: [
            {
                id: "general-plumbing-repairs",
                title: "General Plumbing Repairs",
                description: "Fast, precision fixes for dripping valves, broken handles, faulty fittings, and general pipework malfunctions.",
                icon: "lucide:tool",
                enabled: true,
                scope: "Inspection, precision repair/replacement of damaged parts, pressure verification",
                estTime: "1 - 2 hours"
            },
            {
                id: "plumbing-installation",
                title: "Plumbing Installation",
                description: "Professional installation of new pipelines, shut-off valves, water lines, and sanitary drainage fixtures.",
                icon: "lucide:plus-circle",
                enabled: true,
                scope: "Layout planning, code-compliant pipeline routing, secure fixture installation",
                estTime: "2 - 6 hours"
            },
            {
                id: "plumbing-maintenance",
                title: "Plumbing Maintenance",
                description: "Scheduled preventive checkups to detect early wear, corrosion, sediment buildup, and pressure imbalances.",
                icon: "lucide:check-circle-2",
                enabled: true,
                scope: "Full-system pressure test, valve lubrication, aerator cleaning, sediment flushing",
                estTime: "1 - 3 hours"
            },
            {
                id: "emergency-plumbing-services",
                title: "Emergency Plumbing Services",
                description: "Immediate priority dispatch for urgent ruptures, overflowing fixtures, and catastrophic water leaks.",
                icon: "lucide:alert-triangle",
                enabled: true,
                scope: "Rapid dispatch, immediate line shut-off, emergency pipe sealing/bypass",
                estTime: "20 - 45 min arrival"
            },
            {
                id: "leak-detection-and-repair",
                title: "Leak Detection and Repair",
                description: "Non-invasive acoustic and thermal imaging diagnostics to locate hidden leaks behind tiles and slabs.",
                icon: "lucide:search",
                enabled: true,
                scope: "FLIR infrared scan, acoustic sounder testing, localized pinpoint repair",
                estTime: "1 - 3 hours"
            },
            {
                id: "pipe-repair-and-replacement",
                title: "Pipe Repair and Replacement",
                description: "Sectional repair or complete replacement of damaged copper, PPR, PVC, or galvanized pipes.",
                icon: "lucide:git-commit",
                enabled: true,
                scope: "Damaged section excision, industrial grade coupling, pressure seal testing",
                estTime: "2 - 5 hours"
            },
            {
                id: "new-plumbing-system-installation",
                title: "New Plumbing System Installation",
                description: "End-to-end design and installation of water supply and wastewater networks for new properties.",
                icon: "lucide:network",
                enabled: true,
                scope: "Architectural blueprint review, dual-pressure pipe routing, master manifold install",
                estTime: "Project-based"
            }
        ]
    },
    {
        id: "cat-bathroom-kitchen",
        name: "Bathroom & Kitchen Plumbing",
        shortName: "Bath & Kitchen",
        badge: "High-Traffic Zones",
        icon: "lucide:bath",
        color: "#f59e0b",
        description: "Specialized installation, fixture replacements, and precision repairs for modern kitchens, vanity suites, and master bathrooms.",
        enabled: true,
        services: [
            {
                id: "bathroom-plumbing",
                title: "Bathroom Plumbing",
                description: "Complete water feed and drainage rough-in, trap installations, and waste pipe leveling for bathrooms.",
                icon: "lucide:bath",
                enabled: true,
                scope: "Waterline rough-in, drain stack connection, venting alignment, waterproofing check",
                estTime: "Half to full day"
            },
            {
                id: "kitchen-plumbing",
                title: "Kitchen Plumbing",
                description: "Sink supply lines, garbage disposal hookups, dishwasher integration, and grease-resistant drainage lines.",
                icon: "lucide:utensils",
                enabled: true,
                scope: "Dual shut-off valve fittings, appliance feed connection, trap realignment",
                estTime: "2 - 4 hours"
            },
            {
                id: "tap-and-faucet-installation-repair",
                title: "Tap and Faucet Installation/Repair",
                description: "Servicing single-lever, thermostatic, sensor, and designer mixers to eliminate drips and restore pressure.",
                icon: "lucide:droplets",
                enabled: true,
                scope: "Cartridge replacement, O-ring renewal, high-grade fixture mounting",
                estTime: "1 - 2 hours"
            },
            {
                id: "shower-installation-repair",
                title: "Shower Installation/Repair",
                description: "Installation and troubleshooting of rainfall showerheads, handheld wands, and concealed mixer valves.",
                icon: "lucide:shower-head",
                enabled: true,
                scope: "Concealed mixer calibration, thermostatic balance check, showerhead descaling",
                estTime: "2 - 4 hours"
            },
            {
                id: "toilet-installation-repair",
                title: "Toilet Installation/Repair",
                description: "Fixing running cisterns, replacing wax rings, clearing blockages, and installing floor-mounted or wall-hung toilets.",
                icon: "lucide:circle-dot",
                enabled: true,
                scope: "Flange inspection, wax/silicone sealing, cistern mechanism rebuilding",
                estTime: "1 - 3 hours"
            },
            {
                id: "sink-and-basin-installation",
                title: "Sink and Basin Installation",
                description: "Precision mounting for under-mount, pedestal, vessel, and drop-in sinks with watertight seal guarantees.",
                icon: "lucide:inbox",
                enabled: true,
                scope: "Cabinet template alignment, waterproof silicone bead, waste kit coupling",
                estTime: "2 - 3 hours"
            },
            {
                id: "bathtub-installation",
                title: "Bathtub Installation",
                description: "Secure placement, trap leveling, and overflow drainage setup for freestanding and alcove tubs.",
                icon: "lucide:bath",
                enabled: true,
                scope: "Floor load check, waste trap coupling, overflow test, watertight grouting",
                estTime: "4 - 8 hours"
            },
            {
                id: "bathroom-renovation-plumbing",
                title: "Bathroom Renovation Plumbing",
                description: "Full re-piping, line relocation, and fixture retrofitting for modern residential bathroom upgrades.",
                icon: "lucide:sparkles",
                enabled: true,
                scope: "Old pipe demolition, line rerouting, luxury fixture fit-off, pressure commissioning",
                estTime: "1 - 3 days"
            }
        ]
    },
    {
        id: "cat-drainage-sewer",
        name: "Drainage & Sewer Services",
        shortName: "Drainage & Sewer",
        badge: "Heavy Flow Clearing",
        icon: "lucide:waves",
        color: "#06b6d4",
        description: "Industrial-grade drain cleaning, root removal, video sewer diagnostics, and trenchless underground pipe repairs.",
        enabled: true,
        services: [
            {
                id: "drain-cleaning-and-unblocking",
                title: "Drain Cleaning and Unblocking",
                description: "High-pressure clearing of grease, soap residue, foreign objects, and sludge from household drains.",
                icon: "lucide:wind",
                enabled: true,
                scope: "Mechanical motorized auger / snake clearing, flow restoration, debris extraction",
                estTime: "1 - 2 hours"
            },
            {
                id: "blocked-drain-repair",
                title: "Blocked Drain Repair",
                description: "Targeted repair of collapsed, shifted, or cracked drain sections causing chronic water backup.",
                icon: "lucide:alert-circle",
                enabled: true,
                scope: "Blockage point mapping, localized excavation or relining, joint restoration",
                estTime: "2 - 6 hours"
            },
            {
                id: "sewer-line-repair",
                title: "Sewer Line Repair",
                description: "Precision restoration of punctured or broken main sewer channels to prevent noxious fumes and pooling.",
                icon: "lucide:shield-alert",
                enabled: true,
                scope: "Structural sleeve application, crack sealing, flow gradient recalibration",
                estTime: "Half to full day"
            },
            {
                id: "sewer-line-replacement",
                title: "Sewer Line Replacement",
                description: "Complete overhaul of degraded clay, cast iron, or ancient concrete sewer lines with modern heavy-gauge PVC.",
                icon: "lucide:refresh-cw",
                enabled: true,
                scope: "Old pipe removal/trenchless replacement, municipal junction connection, slope testing",
                estTime: "1 - 2 days"
            },
            {
                id: "cctv-drain-inspection",
                title: "CCTV Drain Inspection",
                description: "HD fiber-optic camera scope sent deep into pipes to record root intrusion, breaks, and structural defects.",
                icon: "lucide:camera",
                enabled: true,
                scope: "Color HD camera feed, digital distance counter, shareable video assessment",
                estTime: "1 - 2 hours"
            },
            {
                id: "manhole-cleaning",
                title: "Manhole Cleaning",
                description: "Removal of hardened sludge, sediment, and bio-debris from residential and commercial inspection chambers.",
                icon: "lucide:layers",
                enabled: true,
                scope: "Chamber de-sludging, vacuum extraction, cover sealing, odor trap check",
                estTime: "2 - 4 hours"
            },
            {
                id: "stormwater-drainage",
                title: "Stormwater Drainage",
                description: "Installing and clearing French drains, sump basins, and catch pits to prevent courtyard and basement flooding.",
                icon: "lucide:cloud-rain",
                enabled: true,
                scope: "Runoff calculation, channel grating installation, discharge point clearing",
                estTime: "3 - 8 hours"
            },
            {
                id: "gutter-and-downpipe-repairs",
                title: "Gutter and Downpipe Repairs",
                description: "Securing roof runoff downspouts, resealing joints, and reconnecting ground drainage collectors.",
                icon: "lucide:arrow-down-circle",
                enabled: true,
                scope: "Obstruction clearing, joint resealing, bracket reinforcement, splash block setup",
                estTime: "1 - 3 hours"
            }
        ]
    },
    {
        id: "cat-water-supply",
        name: "Water Supply & Pipework",
        shortName: "Water Supply",
        badge: "Pressure & Tanks",
        icon: "lucide:gauge",
        color: "#3b82f6",
        description: "Preserving optimal domestic water pressure, storage tank hygiene, booster pumps, and underground supply lines.",
        enabled: true,
        services: [
            {
                id: "water-pipe-installation",
                title: "Water Pipe Installation",
                description: "Laying fresh cold and hot water delivery piping using corrosion-resistant PPR, PEX, and copper tubing.",
                icon: "lucide:pipette",
                enabled: true,
                scope: "Route optimization, thermal expansion allowances, secure clip anchoring",
                estTime: "Half to full day"
            },
            {
                id: "water-pipe-repair",
                title: "Water Pipe Repair",
                description: "Fixing pinhole leaks, freezing fractures, and worn solder joints with long-lasting structural fittings.",
                icon: "lucide:wrench",
                enabled: true,
                scope: "Pipe section drainage, fusion welding/soldering, pressure stability check",
                estTime: "1 - 3 hours"
            },
            {
                id: "water-pressure-problems",
                title: "Water Pressure Problems",
                description: "Diagnosing low or erratic water pressure, removing mineral scale restrictions, and balancing distribution lines.",
                icon: "lucide:gauge",
                enabled: true,
                scope: "Dynamic pressure gauge test, pressure regulator valve adjustment, line clearing",
                estTime: "1 - 2 hours"
            },
            {
                id: "water-tank-installation",
                title: "Water Tank Installation",
                description: "Siting and connecting overhead, underground, and poly water storage tanks with float valves and overflow piping.",
                icon: "lucide:database",
                enabled: true,
                scope: "Base level verification, inlet/outlet manifold plumbing, auto shutoff float setup",
                estTime: "4 - 8 hours"
            },
            {
                id: "water-tank-cleaning",
                title: "Water Tank Cleaning",
                description: "Complete draining, deep mechanical scrubbing, high-pressure jet wash, and safe chemical disinfection of tanks.",
                icon: "lucide:sparkles",
                enabled: true,
                scope: "Sludge pump-out, food-grade tank sanitization, wall scrubbing, refilling test",
                estTime: "2 - 4 hours"
            },
            {
                id: "water-pump-installation-repair",
                title: "Water Pump Installation/Repair",
                description: "Installing and repairing domestic pressure boosters, submersible pumps, and automatic pressure controllers.",
                icon: "lucide:cpu",
                enabled: true,
                scope: "Electrical/hydraulic coupling, check valve installation, pressure switch tuning",
                estTime: "2 - 4 hours"
            },
            {
                id: "underground-pipe-repair",
                title: "Underground Pipe Repair",
                description: "Excavation or trenchless restoration of subterranean water lines cracked by soil shifting or root intrusion.",
                icon: "lucide:arrow-down",
                enabled: true,
                scope: "Precise sonar tracing, targeted ground access, heavy-duty compression sleeves",
                estTime: "3 - 8 hours"
            },
            {
                id: "main-water-line-repair",
                title: "Main Water Line Repair",
                description: "Emergency isolation and heavy-duty repair of the property’s incoming municipal water supply service pipe.",
                icon: "lucide:activity",
                enabled: true,
                scope: "Street valve coordination, municipal grade coupling, high-pressure test",
                estTime: "3 - 6 hours"
            }
        ]
    },
    {
        id: "cat-hot-water",
        name: "Hot Water & Heating",
        shortName: "Hot Water",
        badge: "Thermal Comfort",
        icon: "lucide:flame",
        color: "#f43f5e",
        description: "Installation, preventative maintenance, and rapid repair of instant geysers, storage boilers, and solar water heaters.",
        enabled: true,
        services: [
            {
                id: "water-heater-installation",
                title: "Water Heater Installation",
                description: "Professional installation of electric, gas, and hybrid tank water heaters with certified safety relief valves.",
                icon: "lucide:flame",
                enabled: true,
                scope: "Mounting, dielectric union fittings, TPR valve piping, thermostat setting",
                estTime: "3 - 5 hours"
            },
            {
                id: "water-heater-repair",
                title: "Water Heater Repair",
                description: "Troubleshooting faulty heating elements, broken thermostats, burner igniters, and leaking tank gaskets.",
                icon: "lucide:tool",
                enabled: true,
                scope: "Multimeter electrical diagnosis, heating element replacement, sediment drain",
                estTime: "1 - 3 hours"
            },
            {
                id: "geyser-installation-and-repair",
                title: "Geyser Installation and Repair",
                description: "Servicing instant tankless and storage geysers for steady hot water with minimal fuel consumption.",
                icon: "lucide:zap",
                enabled: true,
                scope: "Venting inspection, gas burner / electric coil service, pressure release test",
                estTime: "2 - 4 hours"
            },
            {
                id: "hot-water-system-maintenance",
                title: "Hot Water System Maintenance",
                description: "Annual descaling of heat exchangers, sacrificial anode rod replacement, and temperature safety checks.",
                icon: "lucide:refresh-cw",
                enabled: true,
                scope: "Vinegar/chemical flushing, anode rod inspection, emergency relief valve test",
                estTime: "1 - 2 hours"
            },
            {
                id: "solar-water-heater-plumbing",
                title: "Solar Water Heater Plumbing",
                description: "Roof collector connections, circulation pumps, insulated loop lines, and auxiliary electric backup tie-ins.",
                icon: "lucide:sun",
                enabled: true,
                scope: "Collector loop check, air relief valve maintenance, thermal insulation check",
                estTime: "3 - 6 hours"
            },
            {
                id: "hot-water-pipe-repairs",
                title: "Hot Water Pipe Repairs",
                description: "Repairing thermal-fatigued pipes, leaking hot water elbows, and installing high-density thermal pipe insulation.",
                icon: "lucide:thermometer",
                enabled: true,
                scope: "High-temperature joint soldering, expansion loop addition, insulation wrap",
                estTime: "1 - 3 hours"
            }
        ]
    },
    {
        id: "cat-commercial-residential",
        name: "Commercial & Residential Plumbing",
        shortName: "Commercial & Residential",
        badge: "Scale & Compliance",
        icon: "lucide:building-2",
        color: "#8b5cf6",
        description: "Tailored plumbing solutions for single-family residences, retail establishments, office suites, and multi-story complexes.",
        enabled: true,
        services: [
            {
                id: "residential-plumbing",
                title: "Residential Plumbing",
                description: "Comprehensive plumbing services for villas, single homes, and townhouses with dedicated care for domestic comfort.",
                icon: "lucide:home",
                enabled: true,
                scope: "Whole-home fixture assessment, quiet-pipe checks, clean indoor workmanship",
                estTime: "Custom"
            },
            {
                id: "commercial-plumbing",
                title: "Commercial Plumbing",
                description: "Heavy-usage restrooms, industrial drains, booster pump manifolds, and compliant corporate facilities.",
                icon: "lucide:building",
                enabled: true,
                scope: "Commercial code compliance, high-capacity drainage, scheduled off-hours service",
                estTime: "Contractual"
            },
            {
                id: "office-plumbing",
                title: "Office Plumbing",
                description: "Executive washrooms, staff kitchenettes, water dispensers, and discreet maintenance with minimal work disruption.",
                icon: "lucide:briefcase",
                enabled: true,
                scope: "Breakroom filtration, multi-stall flushometer maintenance, quiet service hours",
                estTime: "Scheduled"
            },
            {
                id: "shop-and-restaurant-plumbing",
                title: "Shop and Restaurant Plumbing",
                description: "Commercial grease trap servicing, mop sinks, pre-rinse faucets, high-temp dishwasher plumbing, and bar sinks.",
                icon: "lucide:coffee",
                enabled: true,
                scope: "Grease trap hydro-clearing, floor drain backflow prevention, health code prep",
                estTime: "Priority dispatch"
            },
            {
                id: "apartment-and-building-plumbing",
                title: "Apartment and Building Plumbing",
                description: "Multi-unit water risers, vertical soil stacks, sub-metering, and pressure regulation across multiple floors.",
                icon: "lucide:building-2",
                enabled: true,
                scope: "Stack vent inspection, cross-unit leak tracing, central pump maintenance",
                estTime: "Project-based"
            },
            {
                id: "new-construction-plumbing",
                title: "New Construction Plumbing",
                description: "Ground-up plumbing rough-in, sub-slab drainage lines, roof vent stacks, and full municipal inspection sign-offs.",
                icon: "lucide:hard-hat",
                enabled: true,
                scope: "Underground rough-in, top-out stack plumbing, trim/finish fixture fit-off",
                estTime: "Milestone-based"
            },
            {
                id: "plumbing-for-renovation-projects",
                title: "Plumbing for Renovation Projects",
                description: "Relocating water inlets and soil pipes to match open-concept layouts, new kitchen islands, and master expansions.",
                icon: "lucide:layout",
                enabled: true,
                scope: "Demolition mapping, new trenching/chasing, pressure integrity testing",
                estTime: "Renovation schedule"
            },
            {
                id: "industrial-plumbing",
                title: "Industrial Plumbing",
                description: "High-volume process water piping, chemical-resistant drainage, boiler room feed lines, and plant utilities.",
                icon: "lucide:factory",
                enabled: true,
                scope: "Heavy industrial valves, welded steel / flange pipework, high-pressure certification",
                estTime: "Contractual"
            }
        ]
    },
    {
        id: "cat-specialized",
        name: "Specialized Services",
        shortName: "Specialized",
        badge: "Advanced Tech",
        icon: "lucide:shield-check",
        color: "#10b981",
        description: "Certified backflow testing, whole-home water filtration, precision inspections, and preventive maintenance contracts.",
        enabled: true,
        services: [
            {
                id: "bathroom-and-kitchen-remodeling",
                title: "Bathroom and Kitchen Remodeling",
                description: "Architectural plumbing integration for luxury renovations, concealed thermostatic mixers, and island sinks.",
                icon: "lucide:palette",
                enabled: true,
                scope: "Layout restructuring, pipe redirection, high-end fixture commissioning",
                estTime: "Phased"
            },
            {
                id: "water-filtration-system-installation",
                title: "Water Filtration System Installation",
                description: "Whole-house carbon block, sediment filters, and scale reducers to protect pipes and enhance water quality.",
                icon: "lucide:filter",
                enabled: true,
                scope: "Inlet main bypass plumbing, dual-stage filter rack mount, pressure drop check",
                estTime: "2 - 4 hours"
            },
            {
                id: "water-purifier-installation",
                title: "Water Purifier Installation",
                description: "Under-sink RO (Reverse Osmosis) and UV purification systems with dedicated drinking faucets and drain saddles.",
                icon: "lucide:droplet",
                enabled: true,
                scope: "Dedicated angle stop valve, drain saddle hookup, pure water faucet drilling",
                estTime: "1 - 2 hours"
            },
            {
                id: "backflow-prevention",
                title: "Backflow Prevention",
                description: "Installation and testing of RPZ valves and double-check assemblies to prevent contaminated water back-siphonage.",
                icon: "lucide:shield-check",
                enabled: true,
                scope: "RPZ valve installation, differential pressure relief testing, compliance sign-off",
                estTime: "2 - 3 hours"
            },
            {
                id: "gas-line-installation-repair",
                title: "Gas Line Installation/Repair",
                description: "Careful pressure-tested gas piping for cooktops, heaters, and water boilers (conducted with licensed partners).",
                icon: "lucide:flame",
                enabled: true,
                scope: "Gas manometer pressure drop test, black iron / CSST pipe installation, leak soap check",
                estTime: "2 - 5 hours"
            },
            {
                id: "plumbing-inspection",
                title: "Plumbing Inspection",
                description: "Comprehensive 25-point visual and instrumented audit of water feeds, drainage stacks, vents, and fixtures.",
                icon: "lucide:clipboard-check",
                enabled: true,
                scope: "Static pressure test, camera line review, valve operation test, written audit report",
                estTime: "1 - 2 hours"
            },
            {
                id: "preventive-maintenance-contracts",
                title: "Preventive Maintenance Contracts",
                description: "Scheduled bi-annual or quarterly audits, drain treatments, and valve cycling for stress-free property care.",
                icon: "lucide:calendar-check",
                enabled: true,
                scope: "Scheduled routine visits, priority dispatch privileges, member discounted rates",
                estTime: "Ongoing"
            },
            {
                id: "plumbing-consultation",
                title: "Plumbing Consultation",
                description: "Expert engineering advice on plumbing system designs, pump sizing, water conservation, and material selection.",
                icon: "lucide:message-square",
                enabled: true,
                scope: "Technical consultation, blueprint analysis, specification sheet review",
                estTime: "1 hour"
            }
        ]
    },
    {
        id: "cat-additional",
        name: "Additional Services",
        shortName: "Additional",
        badge: "Support & Care",
        icon: "lucide:clock-4",
        color: "#ec4899",
        description: "Priority call-outs, same-day repairs, annual service agreements, and genuine fixtures supply support.",
        enabled: true,
        services: [
            {
                id: "24-7-emergency-call-outs",
                title: "24/7 Emergency Call-Outs",
                description: "On-call mobile plumbing technicians dispatched around the clock for sudden pipe ruptures and severe leaks.",
                icon: "lucide:phone-call",
                enabled: true,
                scope: "Rapid mobile dispatch, active hazard containment, immediate temporary/permanent fix",
                estTime: "Immediate response"
            },
            {
                id: "same-day-plumbing-repairs",
                title: "Same-Day Plumbing Repairs",
                description: "Prompt same-day scheduling for urgent non-flooding issues like clogged toilets, dripping taps, or pump trips.",
                icon: "lucide:clock",
                enabled: true,
                scope: "Fast turnaround, stocked truck parts on hand, same-day resolution",
                estTime: "Within 2 - 4 hours"
            },
            {
                id: "free-estimates-quotes",
                title: "Free Estimates/Quotes",
                description: "Clear, upfront, itemized estimates provided via WhatsApp or on-site consultation with zero surprise fees.",
                icon: "lucide:file-text",
                enabled: true,
                scope: "Photo/video diagnosis review, transparent rate estimation, written quote",
                estTime: "Instant via WhatsApp"
            },
            {
                id: "property-maintenance",
                title: "Property Maintenance",
                description: "Reliable turnkey plumbing maintenance services for landlords, property managers, and real estate agencies.",
                icon: "lucide:shield",
                enabled: true,
                scope: "Tenant call coordination, detailed repair logs, preventative seasonal checks",
                estTime: "Contractual"
            },
            {
                id: "annual-plumbing-maintenance",
                title: "Annual Plumbing Maintenance",
                description: "Yearly whole-property plumbing health check, drain scouring, water heater flush, and valve servicing.",
                icon: "lucide:calendar",
                enabled: true,
                scope: "Comprehensive 30-point checkup, water heater descaling, main line camera scan",
                estTime: "3 - 4 hours"
            },
            {
                id: "plumbing-supplies-and-fixtures-installation",
                title: "Plumbing Supplies and Fixtures Installation",
                description: "Installation of customer-purchased faucets, showers, vanity cabinets, filtration units, and luxury fittings.",
                icon: "lucide:package-check",
                enabled: true,
                scope: "Compatibility verification, professional mounting, leak-free seal warranty",
                estTime: "1 - 3 hours"
            }
        ]
    }
];

// Helper functions for easily querying or disabling items
function getAllActiveCategories() {
    return SERVICES_DATA.filter(c => c.enabled !== false);
}

function getAllActiveServices() {
    const list = [];
    SERVICES_DATA.forEach(cat => {
        if (cat.enabled !== false) {
            cat.services.forEach(svc => {
                if (svc.enabled !== false) {
                    list.push({ ...svc, categoryId: cat.id, categoryName: cat.name });
                }
            });
        }
    });
    return list;
}
