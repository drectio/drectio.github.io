"use strict";

let data = [

    {
        "name": "Integration",
        "category": "prod",
        "base": "time",
        "ESC": false,
        "description": "Time effort is estimated taking into consideration the development and change management of the integration with third-party systems.",
        "pretext": "Time effort is estimated taking into consideration the development and change management of the integration with third-party systems.",
        "posttext": "The complexity of Infrastructure and the knowledge required to change & maintain, increases the dependency on key and valued human resources, with the uplift in associated governance overhead and time-dependency, to enable and approve the change needed to generate the required transactions, due to the complexity.",
        "mfs": [
            {
                "name": "Volume of systems to integrate",
                "short": "systems",
                "monthly": false,
                "default": 5,
                "step": 5
            }
        ],
        "levels": {
            "low": {
                "example": "Integrate with third-party systems MS Teams, Slack, etc.",
                "times": {
                    "Project Manager": { "before": 120, "after": 40 },
                    "SW Developer": { "before": 720, "after": 240 },
                    "Devops Engineer": { "before": 120, "after": 40 },
                    "Q/A Engineer": { "before": 360, "after": 120 },
                    "Architect": { "before": 90, "after": 30 },
                    "Business Analyst": { "before": 90, "after": 30 },
                    "Change Manager": { "before": 30, "after": 0 },
                    "Release Manager": { "before": 30, "after": 0 },
                    "Risk Manager": { "before": 30, "after": 0 },
                    "Security Manager": { "before": 120, "after": 60 },
                    "DB Admin": { "before": 60, "after": 0 },
                    "Data Engineer": { "before": 90, "after": 30 },
                    "Infrastructure Engineer": { "before": 120, "after": 60 },
                    "Business User": { "before": 240, "after": 30 },
                    "Service Manager": { "before": 60, "after": 15 }
                }
            },
            "medium": {
                "example": "Integrate with third-party systems through REST API, email, FTP, etc.",
                "times": {
                    "Project Manager": { "before": 180, "after": 60 },
                    "SW Developer": { "before": 1080, "after": 360 },
                    "Devops Engineer": { "before": 180, "after": 60 },
                    "Q/A Engineer": { "before": 540, "after": 180 },
                    "Architect": { "before": 180, "after": 60 },
                    "Business Analyst": { "before": 180, "after": 60 },
                    "Change Manager": { "before": 90, "after": 30 },
                    "Release Manager": { "before": 90, "after": 30 },
                    "Risk Manager": { "before": 90, "after": 30 },
                    "Security Manager": { "before": 120, "after": 60 },
                    "DB Admin": { "before": 60, "after": 60 },
                    "Data Engineer": { "before": 180, "after": 60 },
                    "Infrastructure Engineer": { "before": 120, "after": 60 },
                    "Business User": { "before": 600, "after": 30 },
                    "Service Manager": { "before": 80, "after": 20 }
                }
            },
            "high": {
                "example": "Integrate with major Front-, Middle-, and Back-Office systems such as SDFC, ERP, POS, Finance, etc.",
                "times": {
                    "Project Manager": { "before": 720, "after": 240 },
                    "SW Developer": { "before": 2160, "after": 240 },
                    "Devops Engineer": { "before": 360, "after": 120 },
                    "Q/A Engineer": { "before": 1800, "after": 600 },
                    "Architect": { "before": 360, "after": 120 },
                    "Business Analyst": { "before": 360, "after": 120 },
                    "Change Manager": { "before": 180, "after": 60 },
                    "Release Manager": { "before": 180, "after": 60 },
                    "Risk Manager": { "before": 180, "after": 60 },
                    "Security Manager": { "before": 120, "after": 60 },
                    "DB Admin": { "before": 120, "after": 120 },
                    "Data Engineer": { "before": 120, "after": 120 },
                    "Infrastructure Engineer": { "before": 240, "after": 60 },
                    "Business User": { "before": 1200, "after": 60 },
                    "Data Protection Officer": { "before": 60, "after": 30 },
                    "Service Manager": { "before": 90, "after": 30 }
                }
            }
        }
    },
    
    {
        "name": "Business User Effort",
        "category": "prod",
        "base": "time",
        "ESC": true,
        "description": "Business Users' current time and effort to define and rework their own data pipelines and work with IT on their development.",
        "pretext": "Business Users' current time and effort to define and rework their own data pipelines and work with IT on their development.",
        "posttext": "Working on and understanding how to define, create, run and maintain changes to existing data pipleines and how to generate new one is currently a multi-way interaction that requires the Business User to start to understand the complexity of the IT Infrastructure world, taking time and effort away from their core-competance of understanding the business problem, the processes required to deliver the daily operations and the data required to be derived to produce the outcome required to enable the analysis to be completed and subsequent decisions and actions underttaken to improve business performance.",
        "mfs": [
            {
                "name": "Volume of Data Workloads",
                "short": "Data Workloads",
                "monthly": false,
                "default": 5,
                "step": 5
            },
            {
                "name": "Estimated Frequency of executions (per month)",
                "short": "monthly executions",
                "monthly": true,
                "default": 5,
                "step": 5
            }
        ],
        "levels": {
            "low": {
                "example": "Data Workload for Stock Reconciliation, Compliance Reporting, etc.",
                "times": {
                    "Project Manager": { "before": 180, "after": 90 },
                    "SW Developer": { "before": 360, "after": 360 },
                    "Devops Engineer": { "before": 270, "after": 90 },
                    "Q/A Engineer": { "before": 180, "after": 180 },
                    "Architect": { "before": 90, "after": 45 },
                    "Business Analyst": { "before": 90, "after": 90 },
                    "Change Manager": { "before": 10, "after": 10 },
                    "Release Manager": { "before": 10, "after": 10 },
                    "Risk Manager": { "before": 10, "after": 10 },
                    "Security Manager": { "before": 10, "after": 10 },
                    "DB Admin": { "before": 60, "after": 60 },
                    "Data Engineer": { "before": 60, "after": 60 },
                    "Infrastructure Engineer": { "before": 480, "after": 30 },
                    "Business User": { "before": 20, "after": 20 },
                    "Service Manager": { "before": 60, "after": 20 }
                }
            },
            "medium": {
                "example": "Generic Data Workload for traditional ETL/ELT",
                "times": {
                    "Project Manager": { "before": 240, "after": 120 },
                    "SW Developer": { "before": 480, "after": 480 },
                    "Devops Engineer": { "before": 360, "after": 120 },
                    "Q/A Engineer": { "before": 240, "after": 240 },
                    "Architect": { "before": 90, "after": 60 },
                    "Business Analyst": { "before": 120, "after": 120 },
                    "Change Manager": { "before": 30, "after": 30 },
                    "Release Manager": { "before": 30, "after": 30 },
                    "Risk Manager": { "before": 30, "after": 30 },
                    "Security Manager": { "before": 30, "after": 30 },
                    "DB Admin": { "before": 60, "after": 60 },
                    "Data Engineer": { "before": 60, "after": 60 },
                    "Infrastructure Engineer": { "before": 480, "after": 60 },
                    "Business User": { "before": 30, "after": 30 },
                    "Service Manager": { "before": 60, "after": 30 }
                }
            },
            "high": {
                "example": "Data Workload for profit margin reconciliation, sales forecast report, etc.",
                "times": {
                    "Project Manager": { "before": 240, "after": 120 },
                    "SW Developer": { "before": 960, "after": 960 },
                    "Devops Engineer": { "before": 920, "after": 240 },
                    "Q/A Engineer": { "before": 480, "after": 480 },
                    "Architect": { "before": 360, "after": 120 },
                    "Business Analyst": { "before": 240, "after": 240 },
                    "Change Manager": { "before": 60, "after": 60 },
                    "Release Manager": { "before": 60, "after": 60 },
                    "Risk Manager": { "before": 60, "after": 60 },
                    "Security Manager": { "before": 60, "after": 60 },
                    "DB Admin": { "before": 90, "after": 90 },
                    "Data Engineer": { "before": 90, "after": 90 },
                    "Infrastructure Engineer": { "before": 1600, "after": 120 },
                    "Business User": { "before": 30, "after": 30 },
                    "Service Manager": { "before": 60, "after": 30 }
                }
            }
        }
    },
    
    {
        "name": "Data Workload Execution",
        "category": "prod",
        "base": "time",
        "ESC": true,
        "description": "Time taken for Change, Advisory, and Query request interaction with IT to enable a Data Workload to be executed.",
        "pretext": "Time taken for Change, Advisory, and Query request interaction with IT to enable a Data Workload to be executed.",
        "posttext": "The rightly required rigor of pre & post execution time to enable changes and introductions into the live IT Infratsructure and Business Applications, to run the needed business governane and performance improvement reports. This effort currently generates and ever increasing time-to-execution, due to needing to understand the impact of chnage, from budget to technical services to requried SLAs, all whlist looking to leverage key kknowledge holders, whose focus is also eneviatiably on major innovation and collaboration projects, which creates a time-bottleneck and adverse pressure on the individuals involved, who ultimately seek to eliviate their situation by looking to move to a new role at best or worse, leave the company.",
        "mfs": [
            {
                "name": "Volume of execution",
                "short": "Data Workloads",
                "monthly": false,
                "default": 5,
                "step": 5
            },
            {
                "name": "Frequency of execution (per month)",
                "short": "monthly executions",
                "monthly": true,
                "default": 5,
                "step": 5
            }
        ],
        "levels": {
            "low": {
                "example": "The execution of a Data Workload to deliver a compliance report",
                "times": {
                    "Data Engineer": { "before": 240, "after": 0 },
                    "Business User": { "before": 30, "after": 10 }
                }
            },
            "medium": {
                "example": "The execution of a Data Workload to ingest a new feed of data sources",
                "times": {
                    "Data Engineer": { "before": 360, "after": 0 },
                    "Business User": { "before": 30, "after": 10 }
                }
            },
            "high": {
                "example": "The execution of a Data Workload for Governance, Compliance, and Risk control, analysis, and reporting",
                "times": {
                    "Data Engineer": { "before": 360, "after": 10 }
                }
            }
        }
    },
    
    {
        "name": "Engineering Effort",
        "category": "prod",
        "base": "time",
        "ESC": false,
        "description": "Man-days Effort estimated for end-to-end development, inclusive of factors such as Design, Build, Test, Release, Change Management, etc., and enablement for current and future innovations such as Cloud Adoption and complex application refactoring.",
        "pretext": "Man-days Effort estimated for end-to-end development, inclusive of factors such as Design, Build, Test, Release, Change Management, etc.and enablement for current and future innovations such as Cloud Adoption and complex application refactoring.",
        "posttext": "The time-effort required to adhere to the change goverance lifecycle, whilst undertaking complex interactions with the Business User, who will be using a different contect and understanding to try to explain their requirements, creates multiple and often wasted interactions points, with iterative re-working, that is often repeated as their is no continuity of process or individuals involved, so in essence, the interaction and development work is being started-from-scratch each time, leading to frustration with the process and individuals, as often the Engineering effort can't be validated until the Business User has recieved the outcome before realising that it wasn't what as requested or needed in the first place.",
        "mfs": [
            {
                "name": "Volume of pipelines to be developed/refactored",
                "short": "pipelines",
                "monthly": false,
                "default": 36,
                "step": 10
            }
        ],
        "levels": {
            "low": {
                "example": "Refactoring and/or Developing a new Data Workload, such as Data Warehouse Modelling",
                "times": {
                    "Project Manager": { "before": 240, "after": 120 },
                    "SW Developer": { "before": 480, "after": 360 },
                    "Devops Engineer": { "before": 240, "after": 120 },
                    "Q/A Engineer": { "before": 240, "after": 180 },
                    "Architect": { "before": 60, "after": 60 },
                    "Business Analyst": { "before": 120, "after": 120 },
                    "Change Manager": { "before": 30, "after": 15 },
                    "Release Manager": { "before": 30, "after": 15 },
                    "Risk Manager": { "before": 30, "after": 15 },
                    "Security Manager": { "before": 30, "after": 15 },
                    "DB Admin": { "before": 60, "after": 60 },
                    "Data Engineer": { "before": 120, "after": 60 },
                    "Infrastructure Engineer": { "before": 480, "after": 60 },
                    "Business User": { "before": 60, "after": 60 },
                    "Service Manager": { "before": 60, "after": 15 }
                }
            },
            "medium": {
                "example": "Refactoring, Cloud Adoption, and/or Developing a critical Data Procesing Pipeline for a complex Business Activity, such as a Company Merger, Acquisition, or Business Unit Spinoff",
                "times": {
                    "Project Manager": { "before": 240, "after": 120 },
                    "SW Developer": { "before": 480, "after": 360 },
                    "Devops Engineer": { "before": 240, "after": 120 },
                    "Q/A Engineer": { "before": 240, "after": 180 },
                    "Architect": { "before": 60, "after": 60 },
                    "Business Analyst": { "before": 120, "after": 120 },
                    "Change Manager": { "before": 60, "after": 30 },
                    "Release Manager": { "before": 60, "after": 30 },
                    "Risk Manager": { "before": 60, "after": 30 },
                    "Security Manager": { "before": 60, "after": 30 },
                    "DB Admin": { "before": 120, "after": 120 },
                    "Data Engineer": { "before": 180, "after": 90 },
                    "Infrastructure Engineer": { "before": 480, "after": 60 },
                    "Business User": { "before": 60, "after": 60 },
                    "Service Manager": { "before": 60, "after": 15 }
                }
            },
            "high": {
                "example": "Developing a new Data Workload for activities such as Off-loading, thereby bypassing Processing Consumption, and/or utilisation of Edge technologies and services",
                "times": {
                    "Project Manager": { "before": 480, "after": 120 },
                    "SW Developer": { "before": 960, "after": 360 },
                    "Devops Engineer": { "before": 480, "after": 120 },
                    "Q/A Engineer": { "before": 480, "after": 180 },
                    "Architect": { "before": 180, "after": 60 },
                    "Business Analyst": { "before": 240, "after": 120 },
                    "Change Manager": { "before": 90, "after": 90 },
                    "Release Manager": { "before": 90, "after": 90 },
                    "Risk Manager": { "before": 90, "after": 90 },
                    "Security Manager": { "before": 90, "after": 90 },
                    "DB Admin": { "before": 240, "after": 60 },
                    "Data Engineer": { "before": 240, "after": 60 },
                    "Infrastructure Engineer": { "before": 480, "after": 60 },
                    "Business User": { "before": 60, "after": 60 },
                    "Data Protection Officer": { "before": 60, "after": 60 },
                    "Service Manager": { "before": 120, "after": 60 }
                }
            }
        }
    },
    
    {
        "name": "Governance",
        "category": "sust",
        "base": "time",
        "ESC": false,
        "description": "Total elapsed time and effort for the end-to-end Change Management Lifecycle of Business and IT.",
        "pretext": " Total elapsed time and effort for the end-to-end Change Management Lifecycle of Business and IT.",
        "posttext": "The time-effort required to adhere to the change goverance lifecycle, whilst undertaking change impact assessments, covering architecture design, configuration bild, implementation impact for operational services, service mnagement acceptance, required managerial approvals, revisions of current solutions, services and required documentation and final release into production sevices.",
        "mfs": [
            {
                "name": "Frequency of developing and governing services and Data Workloads",
                "short": "services/workloads",
                "monthly": false,
                "default": 22,
                "step": 5
            }
        ],
        "levels": {
            "low": {
                "example": "Refactoring or developing technical services that require some data processing, e.g. recoding pipelines VS codeless pipeline development",
                "times": {
                    "Architect": { "before": 30, "after": 0 },
                    "Infrastructure Engineer": { "before": 240, "after": 15 },
                    "Data Protection Officer": { "before": 30, "after": 15 },
                    "Service Manager": { "before": 90, "after": 15 }
                }
            },
            "medium": {
                "example": "Refactoring or developing technical services or data pipelines that require some data processing, e.g. recoding VS codeless development",
                "times": {
                    "Architect": { "before": 60, "after": 0 },
                    "Infrastructure Engineer": { "before": 480, "after": 30 },
                    "Data Protection Officer": { "before": 60, "after": 30 },
                    "Service Manager": { "before": 180, "after": 30 }
                }
            },
            "high": {
                "example": "Refactoring or developing services that require some data processing, e.g. recoding VS codeless development and mapping, migrations, recoding for Cloud and Hybrid Cloud Adoption",
                "times": {
                    "Architect": { "before": 120, "after": 0 },
                    "Infrastructure Engineer": { "before": 960, "after": 60 },
                    "Data Protection Officer": { "before": 120, "after": 60 },
                    "Service Manager": { "before": 360, "after": 60 }
                }
            }
        }
    },
    
    {
        "name": "Regulatory Compliance Risk",
        "category": "sust",
        "base": "money",
        "ESC": false,
        "description": "Risk exposure reduced by replacement of manual processes with automation.",
        "pretext": "By controlling the probability of Incidence, through increasing the footprint of Controlled Group from Uncontrolled Group by 60%, the coverage of process Automated by the Solution.",
        "posttext": "The method used to produce the calculation is Relative Risk. This can be defined as a metric that is taken into use for the measurement of risk-taking place in a particular group and comparing the results obtained from the same with the results of the measurement of a similar risk-taking place in another group.",
        "value": {
            "label": "Average industry fine ($)",
            "short": "Avg. industry fine",
            "default": 35000000,
            "step": 5000000,
            "discounting_factor": 0.6
        }
    },
    
    {
        "name": "Future Spend Optimisation",
        "category": "sust",
        "base": "money",
        "ESC": false,
        "description": "",
        "pretext": "Relational saving on the current spend on the Infrastructure, not required, due to 54% uplift in utilisation of the existing assets.",
        "posttext": "The method used to produce the volume of future infrastructure requirement is calculated, on a relational term, with the growth of Data Production, whose current year-on-year is calculated as 23% as an average capacity management growth metric.",
        "value": {
            "label": "Current infrastructure spend per year ($)",
            "short": "Infra. costs per annum",
            "default": 500000,
            "step": 50000,
            "discounting_factor": 0.957
        }
    },

    {
        "name": "Infrastructure Consumption",
        "category": "oper",
        "base": "money",
        "ESC": false,
        "description": "The Consumption of current contracts and licences spend of existing and changed infrastructure.",
        "pretext": "The amount of current spend on Infratsructure Hardware & Software Contracts per annum and the related saving due to using D.Rectio.",
        "posttext": "The method used to produce the volume of future infrastructure requirement is calculated, on a relational term, with the growth of Data Production, whose current year-on-year is calculated as 23% as an average capacity management growth metric.",
        "value": {
            "label": "Software and hardware costs",
            "short": "CAPEX & OPEX per year",
            "default": 100000,
            "step": 50000,
            "discounting_factor": 0.72
        }
    }
    
];

// The following array contains the needed data about each category of use-cases.
const cats = [
    {
        "short": "prod",
        "name": "Productivity",
        "icon": "fas fa-rocket",
        "colour": "#DD454B"
    },
    {
        "short": "sust",
        "name": "Sustainability",
        "icon": "fas fa-leaf",
        "colour": "#72BDA4"
    },
    {
        "short": "oper",
        "name": "Operational Costs",
        "icon": "fas fa-money-check-alt",
        "colour": "#16296C"
    }
];

function capitaliseFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function decapitaliseFirstLetter(text){
    return text.charAt(0).toLowerCase() + text.slice(1);
}

function zeroPad(num, numZeros){
    // Left-pads `num` with zeros so that it is `numZeros` in length
    // e.g. zeroPad(50, 5) --> '00050'

    let x = num.toString();
    while (x.length < numZeros){
        x = "0" + x;
    }
    return x;
}

function minsToFTEs(mins){
    // Converts a number of minutes to the equivalent number of daily FTEs.
    // One daily FTE is 5 hours' total productive time.

    const ftes = Math.ceil(mins/(60*5));
    return ftes;
}

function formatNumber(number, unit){
    // Formats an integer with commas delimiting 1000s.
    // If a unit is supplied, appends this to the end of the formatted figure.

    const x = number.toString();
    let num = "";
    let count = 0;
    for (let i=x.length-1; i>0; i--) {
        num = x.charAt(i) + num;
        count++;
        if (count == 3){
            count = 0;
            num = "," + num;
        }
    }
    num = x.charAt(0) + num;
    if (typeof unit !== "undefined"){
        num += " " + unit;
    }
    return num
}

function complexityNumToLabel(complexity) {
    if (complexity == 0) return "low";
    if (complexity == 1) return "medium";
    if (complexity == 2) return "high";
    throw "Not a valid complexity number: " + complexity;
}

function complexityLabelToNum(complexity_label) {
    if (complexity_label === "low") return 0;
    if (complexity_label === "medium") return 1;
    if (complexity_label === "high") return 2;
    throw "Not a valid complexity label: " + complexity_label;
}

function getTimesForUsecase(id) {
    // For a use-case, as given by its index in the JSON array `data`, returns the total before and
    // after times over one year.

    let before = 0;
    let after = 0;
    if (data[id]["base"] == "time") {
        const num_complexities = usecases[id].length;
        for (let complexity=0; complexity<num_complexities; complexity++) {
            const num_components = usecases[id][complexity].length;
            const num_mfs = usecases[id][complexity].length;
            let factor = 1;
            for (let mf=0; mf<num_mfs; mf++){
                let local_factor = usecases[id][complexity][mf];
                if (data[id]["mfs"][mf]["monthly"]) {
                    local_factor *= 12;
                }
                factor *= local_factor;
            }
            if (factor > 0) {
                const complexity_label = complexityNumToLabel(complexity)
                const times = data[id]["levels"][complexity_label]["times"];
                const roles = Object.keys(times);
                for (let i=0; i<roles.length; i++) {
                    const role = roles[i];
                    before += times[role]["before"]*factor;
                    after += times[role]["after"]*factor;
                }
            }
        }
    }
    return {"before": before, "after": after};
}

function getCostsForUsecase(id) {
    // For a use-case, as given by its index in the JSON array `data`, returns the total before and
    // after costs over one year.
    
    if (data[id]["base"] == "time") {
        let times = getTimesForUsecase(id);
        const time_before = minsToFTEs(times["before"]);
        const time_after = minsToFTEs(times["after"]);
        return { "before": time_before * cost_per_fte,
                 "after": time_after * cost_per_fte
        };
    } else {
        return { "before": usecases[id],
                 "after": Math.round(usecases[id] * (1-data[id]["value"]["discounting_factor"]))
        };
    }
}

function getCostsForCategory(cat) {
    // For category given by `cat`, returns the total before and after costs for all use-cases in
    // that category over one year.

    let before = [];
    let after = [];
    let case_indices = [];
    for (let i=0; i<data.length; i++) {
        if (data[i]["category"] == cat) {
            const costs = getCostsForUsecase(i);
            before.push(costs["before"]);
            after.push(costs["after"]);
            case_indices.push(i);
        }
    }
    return { "before": before,
             "after": after,
             "indices": case_indices
    };
}

// The following array contains all the required data for each use-case.
// This is manually ingested from the estimator spreadsheet:
// https://docs.google.com/spreadsheets/d/190bP8KxqF61sbP-cYYLGR0an7RxCle_55_yZDCEtk0k/edit#gid=0


// The `usecases` array is a matrix to store the multiplication factors selected by the user for
// each use-case -- for each complexity level, and for each component's multpilication factors.
// It is initially populated with 0s.
// Note that time-based use-cases have neither complexity-levels nor numerous multiplication
// factors, so these inputs are just stored as values within the array directly.

let usecases = [];
for (let i=0; i<data.length; i++) {
    if (data[i]["base"] == "time") {
        usecases.push([]);
        for (let j=0; j<3; j++) {
            usecases[i].push([]);
            const num_mfs = data[i]["mfs"].length;
            for (let k=0; k<num_mfs; k++) {
                usecases[i][j].push(0);
            }
        }
    } else {
        usecases.push(0);
    }
}

const default_cost_per_fte = 660;  // $
let cost_per_fte = default_cost_per_fte;
const min_bar_widths = {"before": 30, "after": 10};  // px

const bar_animation_time = 1500;  // ms
const fading_animation_time = 250;  // ms

$(window).on("resize", () => {
    // When the window is resized, the bars might need to be rescaled, so refresh the display.
    updateDisplay(null);
});

// This way of doing things does not seem to work when integrated with the Hugo website.
// New method at end of file.
// $(document).ready(() => {
//     loadingTasks();
// });

function loadingTasks() {
    $("#cpfte").html(formatNumber(cost_per_fte));
    $("#adder").css("max-height", ""+(($(window).height())*0.9)+"px")
        .css("max-width", ""+Math.min(($(window).width())*0.9, 750)+"px");

    // Populate the display with the categories and their usecases.

    let c = ``;
    for (let i=0; i<cats.length; i++) {
        c += `<div class="category-group">`;
        c += `
            <div class="category" id="`+cats[i]["short"]+`-usecases" style="--c: `+cats[i]["colour"]+`;">
                <img src="../img/icon2-`+cats[i]["short"]+`.svg" style="height:30px;" />
                <p style="color: #ffffff;">`+cats[i]["name"]+`</p>
            </div>`;
        for (let j=0; j<data.length; j++) {
            if (data[j]["category"] == cats[i]["short"]) {
                c += `
                    <div class="usecase clickable" id="case-`+j+`" onclick="openAdder('`+j+`')" style="--c: `+cats[i]["colour"]+`;">
                        `+data[j]["name"]+`
                    </div>
                    `;
            }
        }
        c += `</div>`;
    }
    $("#usecases").html(c);

    // Set up the bars for the categories.

    c = ``;
    for (let i=0; i<cats.length; i++) {
        c += `
            <img src="../img/icon-`+cats[i]["short"]+`.svg" style="width:20px;" />

            <div class="bar-container" style="--c: `+cats[i]["colour"]+`;">
                <div class="bar1" style="--c: `+cats[i]["colour"]+`;"></div>
                <div class="bar2" id="bar-`+cats[i]["short"]+`" style="--c: `+cats[i]["colour"]+`;"></div>
                <span class="saving-perc"><span id="per-`+cats[i]["short"]+`">0</span>% `+cats[i]["name"].split(" ")[0]+` Costs Saved</span>

            </div>
            `;
    }
    $("#bars").html(c);
}

function editCostPerFTE() {
    $("#cpfte").html('<input id="new-cpfte" type="number" step="100" value="'+cost_per_fte+'" />');
    $("#edit-cpfte").html('<i onclick="setCostPerFTE();" class="clickable fas fa-check"></i>');
}

function setCostPerFTE() {
    cost_per_fte = parseInt($("#new-cpfte").val());
    $("#cpfte").html(formatNumber(cost_per_fte));
    $("#edit-cpfte").html('<i onclick="editCostPerFTE();" class="clickable fas fa-pencil-alt"></i>');
    updateDisplay(null);
}

function closePopup() {
    $("#overlay, #popup").hide().css("opacity", 0);
}

function generateReport() {
    // Shows the overlay asking for the user's company, contact details, etc.

    $("#overlay, #popup").show().css("opacity", 1);
    const top = ($(window).height() - $("#popup").outerHeight())/2;
    $("#popup").css("top", top+"px");
    const left = ($(window).width() - $("#popup").outerWidth())/2;
    $("#popup").css("left", left+"px");
}

function generateReport_step2() {
    // Sends a POST request to the NodeJS server with the user's inputted information to get their
    // PDF report.

    $("#inforeq, #reportdone, #reporterror").hide(1000);
    $("#reportloading").show(1000);

    $.ajax({
        type: "POST",
        // url: "/report",
        url: "https://drectio-estimator-reports.herokuapp.com/report",
        data: {
            "company": $("#usrinfo #company").val(),
            "name": $("#usrinfo #name").val(),
            "role": $("#usrinfo #role").val(),
            "email": $("#usrinfo #email").val(),
            "ftecost": cost_per_fte,
            "usecases": JSON.stringify(usecases)
        },
        // success: (data2, status, jqXHR) => {
        //     console.log("Report received!");
        //     $("#reportloading").hide(1000);
        //     $("#reportdone").show(1000);
        //     $("#reportviewer").attr("onclick", "window.open('https://drectio-estimator-reports.herokuapp.com/"+data2+"');");
        // },
        // error: (xhr, ajaxOptions, thrownError) => {
        //     $("#reportloading").hide(1000);
        //     $("#reporterror").show(1000);
        // }
        success: (data2, status, jqXHR) => {
            $("#reportloading").hide(1000);
            $("#reportdone").show(1000);
        },
        error: (xhr, ajaxOptions, thrownError) => {
            $("#reportloading").hide(1000);
            $("#reportdone").show(1000);
        }
    });
}

function closeAdder(num) {
    $("#adder").css("display", "none");
    $("#usecases").css("display", "grid");
    addCase(num);
}

function setOption(checked, num, comp) {
    const mfs = data[num]["mfs"];
    if (checked) {
        $("#sg-"+num+"-"+comp).css("display", "block");
    } else {
        $("#sg-"+num+"-"+comp).css("display", "none");
    }
}

function showInfoBox(num, marker) {
    // Shows the "info-box", which appears when the user hovers the mouse over the bars.

    const costs = getCostsForUsecase(num);
    const cost_before = costs["before"];
    const cost_after = costs["after"];

    let c = '<p class="title">'+data[num]["name"]+'</p>';
    if (marker == "b") {
        c += '<p>Cost before: $'+formatNumber(cost_before)+'</p>';
    } else {
        c += '<p>Cost with D.Rectio: $'+formatNumber(cost_after)+'</p>';
    }
    $("#infobox").html(c);
    $("#infobox").show().css("opacity", 1);

    const offset = $("#"+marker+"-"+num).offset();
    let top = 0;
    if (marker == "b") {
        top = offset["top"] - $("#infobox").outerHeight() - 5;
    } else {
        top = offset["top"] + $("#"+marker+"-"+num).outerHeight() + 5;
    }
    const left1 = offset["left"] + 5;
    const left2 = $(window).width() - 5 - $("#infobox").outerWidth();
    const left = Math.min(left1, left2);

    $("#infobox").css("top", top+"px");
    $("#infobox").css("left", left+"px");
}

function updateDisplay(num, casesOnly) {
    // Updates the display part of the estimator, which comprises the Potential Cost Saving and the
    // bars.
    
    let costs_before = [];
    let costs_after = [];
    
    // In this FOR loop, go through each use-case and show the correct summary of inputted data in
    // each use-case box, and accumulate the before and after costs.

    for (let i=0; i<usecases.length; i++) {

        // Colour the usecase boxes as appropriate
        $("#case-"+i+", #minicase-"+i).removeClass("selected");
        if (data[i]["base"] == "time") {
            for (let j=0; j<usecases[i].length; j++) {
                if (Math.min(...usecases[i][j]) > 0) {
                    $("#case-"+i+", #minicase-"+i).addClass("selected");
                    // $("#cat-"+data[i]["category"]).addClass("selected");
                }
            }
        } else {
            if (usecases[i] > 0) {
                $("#case-"+i+", #minicase-"+i).addClass("selected");
                // $("#cat-"+data[i]["category"]).addClass("selected");
            }
        }

        // Note the before & after costs for the usecase
        if (data[i]["base"] == "time") {
            let times = getTimesForUsecase(i);
            const time_before = minsToFTEs(times["before"]);
            const time_after = minsToFTEs(times["after"]);
            costs_before.push(time_before * cost_per_fte);
            costs_after.push(time_after * cost_per_fte);
        } else {
            costs_before.push(usecases[i]);
            costs_after.push(Math.round(usecases[i] * (1-data[i]["value"]["discounting_factor"])));
        }
        
    }
    
    if (typeof casesOnly !== "undefined"){
        if (casesOnly) {
            return null;
        }
    }
    
    // Calculate the total "Potential Cost Saving" from the accumulated before and after costs, and
    // display this figure.

    const total_cost_before = costs_before.reduce((a, b) => a + b, 0);
    const total_cost_after = costs_after.reduce((a, b) => a + b, 0);
    const total_value = total_cost_before - total_cost_after;

    if (total_value == 0) {
        $("#welcome-note").css("display", "block");
        $("#finish-buttons").css("display", "none");
    } else {
        $("#welcome-note").css("display", "none");
        $("#finish-buttons").css("display", "grid");
    }

    console.log("$" + formatNumber(total_value));
    if ($("#ptv-figure").html() != formatNumber(total_value)) {
        $(".v").css("opacity", 0);
        $("#ptv-figure").html(formatNumber(total_value));
        $(".v").animate({
            opacity: 1
        }, 1000);
    }

    // Show saving percentages for each category by the bars.

    for (let i=0; i<cats.length; i++) {
        const cat_costs = getCostsForCategory(cats[i]["short"]);
        const cat_cost_before = cat_costs["before"].reduce((a, b) => a + b, 0);
        if (cat_cost_before > 0) {
            const cat_cost_after = cat_costs["after"].reduce((a, b) => a + b, 0);
            const cat_cost_saved = cat_cost_before - cat_cost_after;
            const cat_saved_per = Math.round(100*cat_cost_saved/cat_cost_before);
            $("#per-"+cats[i]["short"]).html(cat_saved_per);
            // $("#ov-"+cats[i]["short"]+".overview").css("opacity", 1);
            $("#bar-"+cats[i]["short"]).animate({width: cat_saved_per+"%"}, 1500);
        } else {
            // $("#ov-"+cats[i]["short"]+".overview").css("opacity", 0);
            $("#per-"+cats[i]["short"]).html(0);
            $("#bar-"+cats[i]["short"]).animate({width: "0%"}, 1500);
        }
    }

    // Scroll to the top of the display, as this will probably be out of view from the user having
    // scrolled down to the adder section.
   
    // $("html, body").animate({
    //     scrollTop: $("#display").offset().top
    // }, 0);

    // Update the bars.
    
    // updateBars(num, costs_before, costs_after, total_cost_before, total_cost_after);
    
}

function addCase(num) {
    num = parseInt(num);
    // Updates the use-cases with the values of the use-case of index `num`, based upon the user's
    // input.

    console.log(num, typeof(num));

    if (data[num]["base"] == "time") {
        for (let comp=0; comp<3; comp++) {
            const checked = $("#sel-"+num+"-"+comp).is(":checked");
            for (let mf=0; mf<data[num]["mfs"].length; mf++) {
                if (checked) {
                    let val = parseInt($("#mf-"+num+"-"+comp+"-"+mf).val());
                    if (isNaN(val)) val = 0;
                    usecases[num][comp][mf] = val;
                } else {
                    usecases[num][comp][mf] = 0;
                }
            }
        }
    } else {
        let val = parseInt($("#mf-"+num).val());
        if (isNaN(val)) val = 0;
        usecases[num] = val;
    }

    updateDisplay(num);
    // closeAdder();
}

function openAdder(num) {
    $("#usecases").css("display", "none");
    $("#adder").css("display", "block");

    let cat_num = 0;
    for (let i=0; i<cats.length; i++) {
        if (cats[i]["short"] == data[num]["category"]) {
            cat_num = i;
            break;
        }
    }
    let colour = cats[cat_num]["colour"];

    let c = `
        <div style="display: grid; grid-template-columns: 30px 1fr; gap: 10px;">
            <div style="background-color: `+colour+`; height: 30px; width: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                <img src="../img/icon2-`+cats[cat_num]["short"]+`.svg" style="max-height: 15px; max-width: 15px;" />
            </div>
            <p class="title" style="--c: `+colour+`;">`+data[num]["name"]+`</p>
        </div>

        <p class="description">
            `+data[num]["description"]+`
        </p>
        `;
    if (data[num]["base"] == "time") {
        c += `
            <p class="prompt">
                Select your complexity level(s) for this use-case, and the given usage amount at each level:
            </p>
            <div id="complexities">
            `;
        
            const complexity_labels = Object.keys(data[num]["levels"]);
            const mfs = data[num]["mfs"];
            for (let i=0; i<complexity_labels.length; i++) {
                const label = capitaliseFirstLetter(complexity_labels[i]);
                const complexity = complexityLabelToNum(complexity_labels[i]);
                c += `
                    <div class="complexity">
                        <label class="complexity-container"><b>`+label+` Complexity</b>
                            <input type="checkbox"
                                class="selector"
                                id="sel-`+num+`-`+complexity+`"
                                onclick="setOption(this.checked, '`+num+`', '`+complexity+`');"
                            />
                            <span class="checkmark" style="--c: `+colour+`;"></span>
                        </label>
                        <div class="info" style="--c: `+colour+`;">i</div>
                    </div>
                    <div class="selector-group" id="sg-`+num+`-`+complexity+`">
                    `;
                
                for (let i=0; i<mfs.length; i++) {
                    c += `
                        <label for="mf-`+num+`-`+complexity+`">`+mfs[i]["name"]+`:</label>
                        <br />
                        <input
                            type="number"
                            step="`+mfs[i]["step"]+`"
                            min="0"
                            id="mf-`+num+`-`+complexity+`-`+i+`"
                            value="`+mfs[i]["default"]+`"
                            style="--c: `+colour+`;"
                        />
                        <br />
                        <br />
                        `;
                }

                c += `
                    </div>
                    `;
                if (i < complexity_labels.length - 1) {
                    c += "<hr />";
                }
            }
            c += `</div>`;
    } else {
        c += `
            <p class="prompt">
                Please enter the following information:
            </p>
            <div class="money-value">
                <p><b>`+data[num]["value"]["label"]+`</b></p>
                <label for="mf-`+num+`">`+data[num]["value"]["short"]+`:</label>
                <br />
                <input
                    type="number"
                    step="`+data[num]["value"]["step"]+`"
                    min="0"
                    id="mf-`+num+`"
                    value="0"
                    style="--c: `+colour+`;"
                />
            </div>
            `;
    }

    // Add usecase navigation
    c += `
        <div id="u-nav">
            <div id="grid-button">
                <img src="../img/grid-button.svg" style="height: 35px;" class="clickable" onclick="closeAdder('`+num+`');" />
            </div>
            <div id="arrow-buttons">
        `;
    if (num > 0) c += `<div class="left clickable" onclick="switchCase('`+num+`', '`+(parseInt(num)-1)+`');">‹</div>`;
    if (num < data.length-1) c += `<div class="right clickable" onclick="switchCase('`+num+`', '`+(parseInt(num)+1)+`');">Next ›</div>`;
    c += `
        </div>
        <div id="mini-cases">
            <div><span>Use-case `+(parseInt(num)+1)+`/`+data.length+`</span></div>
        `;

    for (let i=0; i<cats.length; i++) {
        c += `<div class="mini-group">`;
        for (let j=0; j<data.length; j++) {
            if (data[j]["category"] == cats[i]["short"]) {
                c += `
                    <div class="mini-case clickable" id="minicase-`+j+`" onclick="switchCase('`+num+`', '`+j+`')" style="--c: `+cats[i]["colour"]+`;">
                    ✓
                    </div>
                    `;
            }
        }
        c += `</div>`;
    }

    c += `
        </div>
        </div>
        `;

    $("#adder").html(c);

    // Colour the mini boxes where inputs have been given

    for (let i=0; i<usecases.length; i++) {

        // Colour the usecase boxes as appropriate
        $("#minicase-"+i).removeClass("selected");
        if (data[i]["base"] == "time") {
            for (let j=0; j<usecases[i].length; j++) {
                if (Math.min(...usecases[i][j]) > 0) {
                    $("#minicase-"+i).addClass("selected");
                }
            }
        } else {
            if (usecases[i] > 0) {
                $("#minicase-"+i).addClass("selected");
            }
        }
    }
    $("#minicase-"+num).addClass("active");


    // Prepopulate the form with data already submitted
    
    if (data[num]["base"] == "time") {
        const complexity_labels = Object.keys(data[num]["levels"]);
        const mfs = data[num]["mfs"];
        for (let i=0; i<complexity_labels.length; i++){
            const complexity = complexityLabelToNum(complexity_labels[i]);
            for (let mf=0; mf<mfs.length; mf++) {
                const val = usecases[num][complexity][mf];
                if (val > 0) {
                    setOption(true, num, complexity);
                    $("#sel-"+num+"-"+complexity).prop("checked", true);
                    $("#mf-"+num+"-"+complexity+"-"+mf).val(val);
                    $("#sg-"+num+"-"+complexity).css("display", "block");
                }
            }
        }
    } else {
        $("#mf-"+num).val(usecases[num]);
    }
}

function switchCase(num, to_num) {
    addCase(num);
    openAdder(to_num);
}

window.addEventListener("load", function(){
    loadingTasks();
});