import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { resetFlow } from "../redux/Slices/FlowSlice";

export const TEMPLATE_MODULES: TemplateModules = [
  "domain-setup",
  "purchase-templates",
  "favorites",
  "history",
];

interface TemplatePageCtxProps {
  templateModule: TemplateModule;
  setTemplateModule: SetStateFn<TemplateModule>;
}
const ctxDefaultVal = {
  templateModule: TEMPLATE_MODULES[0],
  setTemplateModule: () => {},
};

const WebsiteFlowContext = createContext<TemplatePageCtxProps>(ctxDefaultVal);

export const useTemplatePageCtx = () => {
  const ctx = useContext(WebsiteFlowContext);
  if (!ctx) {
    throw new Error("useWebsiteFlow must be used within WebsiteFlowProvider");
  }
  return ctx;
};

interface Props {
  children: ReactNode;
}

export const TemplatePageCtxProvider = ({ children }: Props) => {
  const [templateModule, setTemplateModule] = useState<TemplateModule>(
    TEMPLATE_MODULES[0]
  );

  const dispatach = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatach(resetFlow());
  }, [templateModule]);

  useEffect(() => {
    const currPath = location.pathname;

    if (["template", "template/"].some((t) => currPath.endsWith(t))) {
      const fullPath = `${currPath}/domain-setup`;
      navigate(fullPath, { replace: true });
    }
  }, [location]);

  const defaultVal = { templateModule, setTemplateModule };

  return (
    <WebsiteFlowContext.Provider value={defaultVal}>
      {children}
    </WebsiteFlowContext.Provider>
  );
};
