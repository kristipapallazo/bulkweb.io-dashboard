import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux";

export const useFilteredTemplates = () => {
  const { templateById, templateAllIds, myTemplates, favorites } = useSelector(
    (state: RootStoreState) => state.templates
  );

  const {
    templateType,
    niche,
    category,
    searchQuery,
    pagination: { currentPage, pageSize },
  } = useSelector((state: RootStoreState) => state.flow);

  console.log(
    "favorites, myTemplates, templateType xxxx :>> ",
    favorites,
    myTemplates,
    templateType
  );
  const filtered = useMemo(() => {
    let result =
      templateType === "All templates"
        ? templateAllIds
        : templateType === "Favorites"
        ? favorites
        : myTemplates;

    if (niche === "all-niches") {
      result =
        templateType === "All templates"
          ? templateAllIds
          : templateType === "Favorites"
          ? favorites
          : myTemplates;
    } else {
      result = result.filter((t) => templateById[t].niche === niche);
    }
    if (category)
      result = result.filter((t) => templateById[t].categ === category);

    if (searchQuery !== "") {
      result = result.filter((t) =>
        templateById[t].name.toLowerCase().includes(searchQuery)
      );
    }
    const paginated = result.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    // const start = (page - 1) * limit;
    // const paginated = result.slice(start, start + limit);

    return {
      templates: paginated,
      total: result.length,
    };
  }, [
    templateAllIds,
    favorites,
    myTemplates,
    niche,
    category,
    searchQuery,
    currentPage,
    pageSize,
    templateType,
  ]);

  return filtered;
};

export const useWebCreateInial = (hostType: HostingPref) => {
  const { websites } = useSelector((state: RootStoreState) => state.user);

  const { domain, template } = useSelector(
    (state: RootStoreState) => state.flow
  );

  const filtered = useMemo(() => {
    let website: Website | null = null;

    const webUrl = `https://www.${domain}`;
    const webId = Object.keys(websites).length + 1;

    if (domain && (template || template === 0)) {
      website = { id: webId, domain, template, url: webUrl, hosting: hostType };
    }
    return website;
  }, [domain, template, websites]);

  return filtered;
};
