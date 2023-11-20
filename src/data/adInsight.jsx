export const AD_INSIGHT_TABLE_DATA_COLUMNS = [
  { field: "Compaigns", sortable: true, resizable: true },
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

export const AD_INSIGHT_TABLE_DATA = [
  {
    Group: "Cosmetics",
    Clicks: 712,
    Cost: 4272,
    Conversions: 8,
    Revenue: 16568,
  },
  {
    Group: "Serums",
    Clicks: 3961,
    Cost: 27331,
    Conversions: 115,
    Revenue: 362526,
  },
  {
    Group: "Facewash",
    Clicks: 9462,
    Cost: 76831,
    Conversions: 123,
    Revenue: 266800,
  },
  {
    Group: "Shampoos",
    Clicks: 439,
    Cost: 2151,
    Conversions: 5,
    Revenue: 11029,
  },
  {
    Group: "Conditioners",
    Clicks: 1680,
    Cost: 3864,
    Conversions: 49,
    Revenue: 175245,
  },
  {
    Group: "Facewash 2",
    Clicks: 4978,
    Cost: 29370,
    Conversions: 189,
    Revenue: 623106,
  },
];
