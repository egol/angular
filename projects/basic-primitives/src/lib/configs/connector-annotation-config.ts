import { ConnectorLabelPlacementType, ConnectorPlacementType, 
  ConnectorShapeType, ZOrderType, AnnotationType, LineType } from '../enums';
import { Size, Thickness } from '../structs';


export class ConnectorAnnotationConfig {
  annotationType: AnnotationType = AnnotationType.Connector;
  zOrderType: ZOrderType = ZOrderType.Foreground;
  fromItem: Array<number|String> = [];
  toItem: Array<number|String> = [];
  connectorShapeType: ConnectorShapeType = ConnectorShapeType.OneWay;
  connectorPlacementType: ConnectorPlacementType = ConnectorPlacementType.Offbeat;
  labelPlacementType: ConnectorLabelPlacementType = ConnectorLabelPlacementType.Between;
  offset: number | Thickness = new Thickness(0, 0, 0, 0);
  lineWidth: number = 2;
  color: String = "#000000";
  lineType: LineType = LineType.Solid;
  selectItems: Boolean = true;
  label:string | null = null;
  size: Size = new Size(60, 30);

  constructor(config: Partial<ConnectorAnnotationConfig> = {}) {
    Object.assign(this, config);
  }
};
