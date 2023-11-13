export const AD_INSIGHT_GRAPHICAL_DATA_COLUMNS = [
  { field: "Group", sortable: true, resizable: true },
  { field: "Clicks", sortable: true, resizable: true, aggFunc: "sum" },
  {
    field: "Cost",
    sortable: true,
    resizable: true,
    aggFunc: "sum",
    valueFormatter: (params) => {
      return `USD ${params.value}`;
    },
  },
  { field: "Conversions", sortable: true, resizable: true, aggFunc: "sum" },
  {
    field: "Revenue",
    sortable: true,
    resizable: true,
    aggFunc: "sum",
    valueFormatter: (params) => {
      return `USD ${params.value}`;
    },
  },
];

export const AD_INSIGHT_GRAPHICAL_DATA = [
  {
    Group: "Male",
    Clicks: 348,
    Cost: 12528,
    Conversions: 42,
    Revenue: 62118,
  },
  {
    Group: "Female",
    Clicks: 692,
    Cost: 24912,
    Conversions: 35,
    Revenue: 5175,
  },
  {
    Group: "Unknown",
    Clicks: 105,
    Cost: 3943,
    Conversions: 3,
    Revenue: 4489,
  },
];
