import arcDataset from "../assets/publications/arc-dataset.webp";

export const publications = [
  {
    id: "arc-dataset",
    title:
      "Dataset and Analysis of River Waste Pollution in the Limmat River, CH, during a One-day City Festival (Zurich Street Parade, 2023)",
    authors: [
      "Fidel Esquivel Estay",
      "Hendrik Kolvenbach",
      "Dario Strübin",
      "Benjamin Sun",
      "Jonas Stolle",
      "Adrian Ensmenger",
      "Lilian Laporte",
      "Emre Elbir",
      "Marco Hutter",
    ],
    venue: "White paper · ETH Research Collection",
    year: 2024,
    image: arcDataset,
    abstract:
      "This paper introduces a dataset of instance segmentation of waste items collected from the Limmat River in Zurich, Switzerland, after the annual festival “Street Parade” held on August 12th, 2023. We have collected the objects during and after the event took place. The objective of the data collection is to gain a better understanding of waste items commonly found in rivers and to provide an open-source dataset for technology developers fighting ocean-bound plastic pollution. Volunteers and scientists from the Autonomous River Cleanup (ARC) team, a project at the Robotic Systems Lab at ETH Zurich, collected the data. The dataset contains 585 annotations of waste objects across 8 classes. Plastic bottles form the predominant part of the dataset by far, matching 436 items to this class. We attribute this number to the high consumption rate of beverages in plastic bottles during this hot summer day and the buoyant properties of plastic.",
    links: { paper: "https://www.research-collection.ethz.ch/handle/20.500.11850/667909" },
  },
];
