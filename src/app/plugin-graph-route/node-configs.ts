import { DataSet } from "vis-data";
import { Edge, Node } from 'vis-network';

class internalNode {
    id: string;
    label: string;
    x: number;
    y: number;
    fixed: boolean;
    color: any;
    shape: any;
    shapeProperties: any
    widthConstraint: any;
    heightConstraint: any;
    font: any;
    title: string;

    constructor(options: {
        id?: string,
        label?: string,
        x?: number,
        y?: number,
        fixed?: boolean,
        active?: boolean,
    } = {}) {
        this.id = options.id ? options.id : Math.random().toString();
        this.label = options.label ? options.label : "Default Label";
        this.x = options.x ? options.x : 0;
        this.y = options.y ? options.y : 0;
        this.fixed = options.fixed ? options.fixed : true;
        const nodeColor = options.active ? 'green' : '#333333'
        const backgroundColor = '#FFFFFF';
        this.color = {
            border: nodeColor,
            background: backgroundColor,
            highlight: { background: backgroundColor, border: nodeColor }
        };
        this.title = `<b>test</b>${this.label}`;
        this.shape = 'box';
        this.shapeProperties = { borderRadius: 25 };
        this.widthConstraint = { minimum: 50 };
        this.heightConstraint = { minimum: 40 };
        this.font = {
            size: 11
        };
    }
}

class internalEdge {
    id: string;
    from: any;
    to: any;
    arrows: any;
    color: string;
    smooth: any;
    arrowStrikethrough: boolean;
    endPointOffset: any;
    dashes: boolean;
    constructor(options: {
        id?: string;
        from?: any;
        to?: any;
        arrows?: any;
        color?: string;
        endPointOffset?: any;
        smooth?: any;
        arrowStrikethrough?: boolean;
        dashes?: boolean;
    } = {}) {
        this.id = options.id ? options.id : Math.random().toString();
        this.from = options.from ? options.from : '';
        this.to = options.to ? options.to : '';
        this.arrows = options.arrows ? options.arrows : { to: { enabled: true, scaleFactor: 0.6 }, from: { enabled: false, scaleFactor: 0.6 } };
        this.color = options.color ? options.color : '';
        this.smooth = options.smooth ? options.smooth : {};
        this.arrowStrikethrough = options.arrowStrikethrough ? options.arrowStrikethrough : true;
        this.endPointOffset = options.endPointOffset ? options.endPointOffset : {}
        this.dashes = options.dashes ? options.dashes : false;
    };
}
export const graphConfigs: any[] = [
    {
        configName: "A",
        nodes: [
            new internalNode({ id: 'REQ1', label: 'REQ 1', x: 0, y: 0 }),
            new internalNode({ id: 'REL1', label: 'REL', x: 100, y: 0 }),
            new internalNode({ id: 'AO', label: 'AO', x: 200, y: 0 }),
            new internalNode({ id: 'PA', label: 'PA', x: 300, y: 0, active: true }),
            new internalNode({ id: 'PEER', label: 'PEER', x: 350, y: -100 }),
            new internalNode({ id: 'IT', label: 'IT', x: 250, y: 100 }),
            new internalNode({ id: 'RMLRO', label: 'RML RO', x: 350, y: 100 }),
            new internalNode({ id: 'NBS', label: 'NBS', x: 400, y: 0 }),
            new internalNode({ id: 'PRISM', label: 'PRISM', x: 500, y: 0 }),
            new internalNode({ id: 'REQ2', label: 'REQ 2', x: 600, y: 0 }),
            new internalNode({ id: 'NBSRO', label: 'NBS RO', x: 700, y: 0 }),
            new internalNode({ id: 'ARCHPA', label: 'ARCH PA', x: 800, y: 0 }),
        ],
        edges: [
            new internalEdge({ from: 'REQ1', to: 'REL1' }),
            new internalEdge({ from: 'REL1', to: 'AO' }),
            new internalEdge({ from: 'AO', to: 'PA' }),
            new internalEdge({ from: 'PA', to: 'AO', color: 'red' }),
            new internalEdge({ from: 'PA', to: 'REQ1', color: 'red', smooth: { type: "curvedCW", roundness: 0.3 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: -5 } }),
            new internalEdge({ from: 'PA', to: 'PEER', arrows: { to: { enabled: true, scaleFactor: 0.6 }, from: { enabled: true, scaleFactor: 0.6 } }, smooth: { type: "vertical", roundness: 0.6 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: 0 }, color: 'gray', dashes: true }),
            new internalEdge({ from: 'PA', to: 'RMLRO', arrows: { to: { enabled: true, scaleFactor: 0.6 }, from: { enabled: true, scaleFactor: 0.6 } }, smooth: { type: "vertical", roundness: 0.6 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: 0 } }),
            new internalEdge({ from: 'PA', to: 'IT', arrows: { to: { enabled: true, scaleFactor: 0.6 }, from: { enabled: true, scaleFactor: 0.6 } }, smooth: { type: "vertical", roundness: 0.6 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: 0 } }),
            new internalEdge({ from: 'PA', to: 'NBS' }),
            new internalEdge({ from: 'NBS', to: 'PRISM' }),
            new internalEdge({ from: 'PRISM', to: 'REQ2' }),
            new internalEdge({ from: 'REQ2', to: 'NBSRO' }),
            new internalEdge({ from: 'ARCHPA', to: 'NBSRO' }),
            new internalEdge({ from: 'NBSRO', to: 'ARCHPA' }),
            new internalEdge({ from: 'ARCHPA', to: 'PA', smooth: { type: "curvedCW", roundness: 0.3 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: -5 }, color: 'orange' }),
            new internalEdge({ from: 'PA', to: 'ARCHPA', smooth: { type: "curvedCW", roundness: 0.3 }, arrowStrikethrough: true, endPointOffset: { to: -9, from: -5 }, color: 'red' }),
        ]
    },
    {
        configName: "B",
        nodes: new DataSet<Node>([
            { id: 'REQ1', label: 'REQ 1', x: 0, y: 0, fixed: true },
            { id: 'REL1', label: 'REL', x: 150, y: 0, fixed: true, color: "red" },
            { id: 'AO', label: 'AO', x: 300, y: 0, fixed: true },
            { id: 'PA', label: 'PA', x: 450, y: 0, fixed: true },
            { id: 'PEER', label: 'PEER', x: 450, y: -100, fixed: true },
            { id: 'IT', label: 'IT', x: 300, y: 100, fixed: true },
            { id: 'RMLRO', label: 'RML RO', x: 450, y: 100, fixed: true },
            { id: 'NBS', label: 'NBS', x: 600, y: 0, fixed: true },
            { id: 'PRISM', label: 'PRISM', x: 750, y: 0, fixed: true },
            { id: 'REQ2', label: 'REQ 2', x: 900, y: 0, fixed: true },
            { id: 'NBSRO', label: 'NBS RO', x: 1050, y: 0, fixed: true },
            { id: 'ARCHPA', label: 'ARCH PA', x: 1200, y: 0, fixed: true }
        ]),
        edges: new DataSet<any>([
            { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to", },
            { id: 'b', from: 'REL1', to: 'REQ1', arrows: "to", },
            { id: 'c', from: 'REL1', to: 'AO', arrows: "to", dashes: true },
            { id: 'd', from: 'AO', to: 'REL1', arrows: "to", dashes: true },
            { id: 'e', from: 'AO', to: 'PA', arrows: "to", dashes: true },
            { id: 'f', from: 'PA', to: 'AO', arrows: "to", dashes: true },
            { id: 'g', from: 'PA', to: 'REQ1', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
            { id: 'h', from: 'PA', to: 'PEER', arrows: "to", },
            { id: 'i', from: 'PEER', to: 'PA', arrows: "to", },
            { id: 'j', from: 'PA', to: 'RMLRO', arrows: "to", },
            { id: 'k', from: 'PA', to: 'IT', arrows: "to", },
            { id: 'l', from: 'IT', to: 'PA', arrows: "to", },
            { id: 'm', from: 'PA', to: 'NBS', arrows: "to", },
            { id: 'n', from: 'NBS', to: 'PRISM', arrows: "to", },
            { id: 'o', from: 'PRISM', to: 'REQ2', arrows: "to", },
            { id: 'p', from: 'REQ2', to: 'NBSRO', arrows: "to", },
            { id: 'q', from: 'NBSRO', to: 'ARCHPA', arrows: "to", },
            { id: 'r', from: 'ARCHPA', to: 'NBSRO', arrows: "to", },
            { id: 's', from: 'ARCHPA', to: 'PA', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
            { id: 't', from: 'PA', to: 'ARCHPA', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } }
        ]),
    },
    {
        configName: "C",
        nodes: new DataSet<Node>([
            { id: 'REQ1', label: 'REQ 1', x: 150, y: 0, fixed: true },
            { id: 'REL1', label: 'REL', x: 300, y: 0, fixed: true },
            { id: 'REL2', label: 'REL 2', x: 450, y: 0, fixed: true, color: "red" },
            { id: 'REL3', label: 'REL 3', x: 600, y: 0, fixed: true },
            { id: 'IT', label: 'IT', x: 450, y: -100, fixed: true },
            { id: 'REQCANCEL', label: 'REQ CANCEL', x: 450, y: 100, fixed: true }
        ]),
        edges: new DataSet<any>([
            { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to,from", },
            { id: 'b', from: 'REL2', to: 'REL1', arrows: "to,from", },
            { id: 'c', from: 'REL2', to: 'REL3', arrows: "to,from", },
            { id: 'd', from: 'REL2', to: 'REQ1', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } },
            // { id: 'e', from: 'REL1', to: 'IT', arrows: "to,from", },
            { id: 'f', from: 'REL2', to: 'IT', arrows: "to,from", },
            // { id: 'g', from: 'REL3', to: 'IT', arrows: "to,from", },
            // { id: 'h', from: 'REQ1', to: 'IT', arrows: "to,from", },
            // { id: 'I', from: 'REL1', to: 'REQCANCEL', arrows: "to", },
            { id: 'J', from: 'REL2', to: 'REQCANCEL', arrows: "to", },
            // { id: 'K', from: 'REL3', to: 'REQCANCEL', arrows: "to", },
            // { id: 'l', from: 'REQ1', to: 'REQCANCEL', arrows: "to", },
        ]),
    },
    {
        configName: "D",
        nodes: new DataSet<Node>([
            { id: 'REQ1', label: 'REQ 1', x: 0, y: 0, fixed: true },
            { id: 'AO', label: 'AO', x: 300, y: 0, fixed: true },
            { id: 'PA', label: 'PA', x: 450, y: 0, fixed: true, color: "red" },
            { id: 'PEER', label: 'PEER', x: 450, y: -100, fixed: true },
            { id: 'IT', label: 'IT', x: 300, y: 100, fixed: true },
            { id: 'RMLRO', label: 'RML RO', x: 450, y: 100, fixed: true },
            { id: 'NBS', label: 'NBS', x: 600, y: 0, fixed: true },
            { id: 'ARCHPA', label: 'ARCH PA', x: 1200, y: 0, fixed: true }
        ]),
        edges: new DataSet<any>([
            { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to", },
            { id: 'b', from: 'REQ1', to: 'AO', arrows: "to,from", dashes: true },
            { id: 'e', from: 'AO', to: 'PA', arrows: "to", dashes: true },
            { id: 'f', from: 'PA', to: 'AO', arrows: "to", dashes: true },
            { id: 'g', from: 'PA', to: 'REQ1', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
            { id: 'h', from: 'PA', to: 'PEER', arrows: "to", },
            { id: 'i', from: 'PEER', to: 'PA', arrows: "to", },
            { id: 'j', from: 'PA', to: 'RMLRO', arrows: "to", },
            { id: 'k', from: 'PA', to: 'IT', arrows: "to", },
            { id: 'l', from: 'IT', to: 'PA', arrows: "to", },
            { id: 'm', from: 'PA', to: 'NBS', arrows: "to", },
            { id: 'n', from: 'NBS', to: 'ARCHPA', arrows: "to", dashes: true },
            { id: 't', from: 'PA', to: 'ARCHPA', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } }
        ]),
    },
    {
        configName: "E",
        nodes: new DataSet<Node>([
            { id: 'REQ1', label: 'REQ 1', x: 150, y: 0, fixed: true },
            { id: 'AO', label: 'AO', x: 300, y: 0, fixed: true },
            { id: 'PA', label: 'PA', x: 450, y: 0, fixed: true, color: "red" },
            { id: 'PEER', label: 'PEER', x: 450, y: -100, fixed: true },
            { id: 'IT', label: 'IT', x: 300, y: 100, fixed: true },
            { id: 'RMLRO', label: 'RML RO', x: 450, y: 100, fixed: true },
            { id: 'NBS', label: 'NBS', x: 600, y: 0, fixed: true },
            { id: 'ARCHPA', label: 'ARCH PA', x: 750, y: 0, fixed: true }
        ]),
        edges: new DataSet<any>([
            { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to", },
            { id: 'b', from: 'REQ1', to: 'AO', arrows: "to,from", dashes: true },
            { id: 'e', from: 'AO', to: 'PA', arrows: "to", dashes: true },
            { id: 'f', from: 'PA', to: 'AO', arrows: "to", dashes: true },
            { id: 'g', from: 'PA', to: 'REQ1', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
            { id: 'h', from: 'PA', to: 'PEER', arrows: "to", },
            { id: 'i', from: 'PEER', to: 'PA', arrows: "to", },
            { id: 'j', from: 'PA', to: 'RMLRO', arrows: "to", },
            { id: 'k', from: 'PA', to: 'IT', arrows: "to", },
            { id: 'l', from: 'IT', to: 'PA', arrows: "to", },
            { id: 'm', from: 'PA', to: 'NBS', arrows: "to", },
            { id: 'n', from: 'NBS', to: 'ARCHPA', arrows: "to", dashes: true },
            { id: 't', from: 'PA', to: 'ARCHPA', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } }
        ]),
    },
    {
        configName: "Z",
        nodes: new DataSet<Node>([
            { id: 1, label: 'Node 1', x: 200, y: 40 },
            { id: 2, label: 'Node 2', x: 300, y: 440 },
            { id: 3, label: 'Node 3', x: 400, y: 40 },
            { id: 4, label: 'Node 4', x: 500, y: 40 },
            { id: 5, label: 'Node 5', x: 600, y: 40 }
        ]),
        edges: new DataSet<Edge>([
            { from: 1, to: 3 },
            { from: 1, to: 2 },
            { from: 2, to: 4 },
            { from: 2, to: 5, arrows: "to" },
            { from: 5, to: 2, arrows: "to", dashes: true }
        ])
    }
]

export const nodes = new DataSet<Node>(
    [
        { id: 'REQ1', label: 'REQ 1', x: 0, y: 0, fixed: true },
        { id: 'REL1', label: 'REL', x: 150, y: 0, fixed: true },
        { id: 'AO', label: 'AO', x: 300, y: 0, fixed: true },
        { id: 'PA', label: 'PA', x: 450, y: 0, fixed: true, color: "red" },
        { id: 'PEER', label: 'PEER', x: 450, y: -100, fixed: true },
        { id: 'IT', label: 'IT', x: 300, y: 100, fixed: true },
        { id: 'RMLRO', label: 'RML RO', x: 450, y: 100, fixed: true },
        { id: 'NBS', label: 'NBS', x: 600, y: 0, fixed: true },
        { id: 'PRISM', label: 'PRISM', x: 750, y: 0, fixed: true },
        { id: 'REQ2', label: 'REQ 2', x: 900, y: 0, fixed: true },
        { id: 'NBSRO', label: 'NBS RO', x: 1050, y: 0, fixed: true },
        { id: 'ARCHPA', label: 'ARCH PA', x: 1200, y: 0, fixed: true }
    ]
);

export const edges = new DataSet<any>(
    [
        { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to", },
        { id: 'b', from: 'REL1', to: 'REQ1', arrows: "to", },
        { id: 'c', from: 'REL1', to: 'AO', arrows: "to", dashes: true },
        { id: 'd', from: 'AO', to: 'REL1', arrows: "to", dashes: true },
        { id: 'e', from: 'AO', to: 'PA', arrows: "to", dashes: true },
        { id: 'f', from: 'PA', to: 'AO', arrows: "to", dashes: true },
        { id: 'g', from: 'PA', to: 'REQ1', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
        { id: 'h', from: 'PA', to: 'PEER', arrows: "to", },
        { id: 'i', from: 'PEER', to: 'PA', arrows: "to", },
        { id: 'j', from: 'PA', to: 'RMLRO', arrows: "to", },
        { id: 'k', from: 'PA', to: 'IT', arrows: "to", },
        { id: 'l', from: 'IT', to: 'PA', arrows: "to", },
        { id: 'm', from: 'PA', to: 'NBS', arrows: "to", },
        { id: 'n', from: 'NBS', to: 'PRISM', arrows: "to", },
        { id: 'o', from: 'PRISM', to: 'REQ2', arrows: "to", },
        { id: 'p', from: 'REQ2', to: 'NBSRO', arrows: "to", },
        { id: 'q', from: 'NBSRO', to: 'ARCHPA', arrows: "to", },
        { id: 'r', from: 'ARCHPA', to: 'NBSRO', arrows: "to", },
        { id: 's', from: 'ARCHPA', to: 'PA', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
        { id: 't', from: 'PA', to: 'ARCHPA', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } }
    ]
);