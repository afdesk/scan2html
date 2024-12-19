<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Trivy Report</title>

    <style>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            height: 100vh;
            width: 99vw;
        }

        h1, h2 {
            text-align: center;
        }

        .top-vuln-title, .top-misc-title {
            border-bottom: 1px solid #0000001f;
        }

        .initially-disabled {
            display: none;
        }

        .link {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            height: 1.2em;
            white-space: nowrap;
        }

        .vuln {
            word-wrap: anywhere;
        }

        .group-header th {
            font-size: 200%;
        }

        table,
        th,
        td {
            width: 100%;
            border-top: 1px solid #0000001f;
            border-collapse: collapse;
            padding: .3em;
            white-space: normal;
        }

        table {
            margin-left: 0;
            table-layout: fixed;
            border: 2px solid #ddd;
        }

        .placeholder-row td {
            height: 30px;
            border: none;
            background-color: transparent;
            padding: 0;
        }

        .last-data-row td {
            border-bottom: none;
        }

        .severity {
            font-weight: bold;
        }


        table tr td:first-of-type {
            font-weight: bold;
        }

        .links a,
        .links[data-more-links=on] a {
            display: block;
        }

        .links[data-more-links=off] a:nth-of-type(1n+2) {
            display: none;
        }

        a.toggle-more-links {
            cursor: pointer;
        }

        th[data-sortable="true"] {
            cursor: pointer;
        }

        .sub-header th {
            font-size: 150%;
            text-align: center;
            background-color: #ddd;
        }

        th svg {
            visibility: hidden;
            pointer-events: none;
        }

        th span {
            pointer-events: none;
        }

        .sub-header th[data-sortable="true"] svg {
            visibility: visible;
        }

        ul {
            list-style-type: none;
        }

        .search {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23bdbdbd' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
            border: 1px solid #ddd;
        }

        .search:focus {
            outline: none;
            border-color: #07f;
            box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
        }

        .filter_bar {
            display: flex;
            align-items: center;
        }

        .filterable:hover {
            background-color: #f1f1f1;
        }

        .pkg-name {
            width: 100%;
            height: 1.2em;
        }

        .ta-center {
            text-align: center;
        }

        .break-word {
            word-wrap: break-word;
        }

        .header__title {
            font-size: 24px;
        }

        .secret__line {
            display: flex;
        }

        .secret__code {
            background-color: #f1f1f1;
            border: #e1e1e1;
            border-radius: 5px;
            padding: 10px 0 10px 15px;
        }

        .secret__line pre {
            margin: 0;
            overflow-wrap: anywhere;
            white-space: pre-line;
        }

        .secret__line-cause {
            color: #e40000;
        }

        .secret__line-number {
            border-right: 1px solid black;
            margin-right: 10px;
            padding-right: 10px;
        }

        .secret__src-file {
            color: #1f6feb
        }

        .secret__src-lines {
            color: #1f6feb
        }

        .severity-LOW {
            color: #5fbb31;
        }

        .severity-MEDIUM {
            color: #e9c600;
        }

        .severity-HIGH {
            color: #ff8800;
        }

        .severity-CRITICAL {
            color: #e40000;
        }

        .severity-UNKNOWN {
            color: #747474;
        }

        .secret__severity {
            font-weight: bold;
        }

        .secret-results__title {
            margin-bottom: 0;
            font-size: 24px;
        }

        .secret__head {
            margin-left: 15px;
        }

        .secret__title {
            margin-left: 15px;
        }

        .secret__src {
            margin-left: 15px;
        }

        .secret + .secret {
            margin-top: 10px;
        }

        ul {
            list-style: none;
        }

        .hidden {
            display: none;
        }

        .target-item {
            margin-bottom: 10px;
        }

        .target-item:hover {
            background-color: #7d7d7d;
        }

        .sidebar li > ul {
            display: none;
            /* padding-left: 20px; */
        }

        .sidebar li.active > ul {
            display: block;
        }

        .graph {
            flex-grow: 1;
            background-color: #ecf0f1;
            width: 100%;
            height: 100%;
        }

        .content {
            flex-direction: column;
            flex: 1 1 auto;
            display: none;
            background-color: #fff;
            border: 1px solid #ccc;
            overflow: hidden;
        }

        .movable-content {
            padding: 10px;
            height: 100%;
            background-color: #fff;
            border: 1px solid #ccc;
        }

        .graph-buttons button,
        .open-window-button
        {
            background: none;
            border: none;
            font-size: 18px;
            color: white;
            cursor: pointer;
            font-weight: bold;
        }

        .graph-buttons{
            flex-direction: row;
            display: flex;
        }

        .content-header {
            position: relative;
            display: flex;
            justify-content: space-between;
            background-color: #007bff;
            color: white;
            padding: 10px;
            user-select: none;
        }

        #movable-window {
            position: fixed;
            top: 2%;
            right: 3%;
            width: 30%;
            height: 50%;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            display: none;
        }


        #movable-window.hidden {
            height: auto;
            min-height: unset;
            overflow: hidden;
        }

        #movable-window.hidden .movable-content {
            display: none;
        }

        .container {
            padding-bottom: 10px;
            flex-direction: row;
            width: 100%;
            display: flex;
            overflow: hidden;
        }

        #info {
            display: none;
            z-index: 1000;
            position: absolute;
            background: white;
            border: 1px solid black;
            padding: 5px;
            left: 599px;
            top: 359px;
        }

        pre code.hljs {
            display: block;
            overflow-x: auto;
            padding: 1em
        }

        code.hljs {
            padding: 3px 5px
        }

        /*!
                  Theme: GitHub
                  Description: Light theme as seen on github.com
                  Author: github.com
                  Maintainer: @Hirse
                  Updated: 2021-05-15

                  Outdated base version: https://github.com/primer/github-syntax-light
                  Current colors taken from GitHub's CSS
                */
        .hljs {
            color: #24292e;
            background: #fff
        }

        .hljs-doctag, .hljs-keyword, .hljs-meta .hljs-keyword, .hljs-template-tag, .hljs-template-variable, .hljs-type, .hljs-variable.language_ {
            color: #d73a49
        }

        .hljs-title, .hljs-title.class_, .hljs-title.class_.inherited__, .hljs-title.function_ {
            color: #6f42c1
        }

        .hljs-attr, .hljs-attribute, .hljs-literal, .hljs-meta, .hljs-number, .hljs-operator, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-id, .hljs-variable {
            color: #005cc5
        }

        .hljs-meta .hljs-string, .hljs-regexp, .hljs-string {
            color: #032f62
        }

        .hljs-built_in, .hljs-symbol {
            color: #e36209
        }

        .hljs-code, .hljs-comment, .hljs-formula {
            color: #6a737d
        }

        .hljs-name, .hljs-quote, .hljs-selector-pseudo, .hljs-selector-tag {
            color: #22863a
        }

        .hljs-subst {
            color: #24292e
        }

        .hljs-section {
            color: #005cc5;
            font-weight: 700
        }

        .hljs-bullet {
            color: #735c0f
        }

        .hljs-emphasis {
            color: #24292e;
            font-style: italic
        }

        .hljs-strong {
            color: #24292e;
            font-weight: 700
        }

        .hljs-addition {
            color: #22863a;
            background-color: #f0fff4
        }

        .hljs-deletion {
            color: #b31d28;
            background-color: #ffeef0
        }
    </style>
</head>
<body>

{{- if .Results }}
<h1 id="report-title">Trivy Report - <span class="report-title__target"> {{ ( index .Results 0 ).Target }}</span>
</h1>
<div class="filter_bar">
    <input type="text" placeholder="Search.."
           title="Search by package, vulnerability id, severity, installed version"
           class="filter_bar__filter_name search">
</div>

<div id="movable-window">
    <div id="movable-header" class="content-header">
        <button class="open-window-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="16" fill="white">
                <path d="M14 3h7v7M21 3L10 14M3 10v11h11M3 21L21 3" stroke="#fff" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <span></span>
        <div class="graph-buttons">
            <button class="hide-window">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M5 12h14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <button class="close-window">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="movable-content">
        <div class="graph" data-index="window"></div>
    </div>
</div>

<div id="info"></div>

{{- range $resultIndex, $result := .Results }}
{{- if or .Vulnerabilities .Misconfigurations .Secrets}}

<div class="header">
    <h3 class="header__title ta-center"> {{ .Target}} </h3>
</div>
{{- if .Vulnerabilities }}
<table>
    <thead>
    <tr class="sub-header">
        <th data-type="string" data-sortable="true"><span> Package </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> Vulnerability ID </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="severity" data-sortable="true"><span> Severity </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> Installed Version </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="false"><span> Fixed Version </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="false"><span> Links </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
    </tr>
    </thead>
    <tbody data-main="true">
    {{- range .Vulnerabilities }}
    <tr class="filterable">
        <td class="pkg-name break-word">{{ .PkgName }}</td>
        <td class="vuln">{{ .VulnerabilityID }}</td>
        <td class="severity ta-center">{{ .Vulnerability.Severity }}</td>
        <td class="pkg-version">{{ .InstalledVersion }}</td>
        <td class="fixed-version">{{ .FixedVersion }}</td>
        <td class="links" data-more-links="off">
            {{- range .Vulnerability.References }}
            <a href={{ . | printf "%q" }}>{{ . }}</a>
            {{- end }}
        </td>
    </tr>
    {{- end}}
    </tbody>
</table>
{{- end }}


{{- if .Misconfigurations }}
<div class="container">
    <table class="misc-table" data-index="{{$resultIndex}}">
        <thead>
        <tr class="sub-header">
            <th data-type="string" data-sortable="true"><span> Type </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Misconf ID </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Check </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="severity" data-sortable="true"><span> Severity </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>

            <th data-type="string" data-sortable="false"><span> Message </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>

        </tr>
        </thead>
        <tbody data-main="true">

        {{- range $index, $misc:= .Misconfigurations }}
        <tr class="misconf-item filterable" data-index="{{$resultIndex}} {{$index}}" title="Click to see graph">
            <td class="misc-type">{{ .Type}}</td>
            <td class="misc-id"> {{ .ID }}</td>
            <td class="misc-check">{{ .Title }}</td>
            <td class="severity ta-center">{{ .Severity }}</td>
            <td class="misc-msg">{{ .Message }}
                <br>
                <a href={{ .PrimaryURL | printf "%q" }}>{{ .PrimaryURL }}</a>
                </br>
            </td>
        </tr>
        {{- end}}
        </tbody>
    </table>

    <div class="content" data-index="{{$resultIndex}}">
        <div class="content-header">
            <span></span>
            <div class="graph-buttons">
                <button class="open-window-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="16" fill="white">
                        <path d="M14 3h7v7M21 3L10 14M3 10v11h11M3 21L21 3" stroke="#fff" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="graph" data-index="{{$resultIndex}}"></div>

    </div>
</div>
{{- end }}


{{- if .Secrets }}
<div class="secret-results">
    <h3 class="secret-results__title">
        <span class="secret-results__title-target"> {{ .Target }}</span>
        <span class="secret-results__title-class"> ({{ .Class }})</span>
    </h3>

    <div class="secret-results__content">
        {{- $target := .Target }}
        {{- range .Secrets }}
        <div class="secret">
            <div class="secret__head">
                <span class="secret__severity severity-{{ .Severity }}"> {{ .Severity }} </span>
                <span class="secret__type"> {{.Category}} ({{ .RuleID }})</span>
            </div>
            <div class="secret__title"> {{ .Title }}</div>
            <div class="secret__src">
                <span class="secret__src-file">{{ $target}}</span>
                <span class="secret__src-delimiter">:</span>
                <span class="secret__src-lines">
                    {{ if eq .StartLine .EndLine }}
                                {{ .StartLine }}
                            {{ else }}
                                {{ .StartLine }} - {{ .EndLine }}
                            {{ end }}</span>
            </div>
            <div class="secret__code">
                {{- range .Code.Lines }}
                {{- if .IsCause}}
                <div class="secret__line secret__line-cause">
                    <div class="secret__line-number">{{ .Number}}</div>
                    <div class="secret__line-code">
                        <pre> {{.Content}}</pre>
                    </div>
                </div>
                {{- else}}
                <div class="secret__line">
                    <div class="secret__line-number">{{ .Number}}</div>
                    <div class="secret__line-code">
                        <pre> {{.Content}} </pre>
                    </div>
                </div>
                {{- end }}
                {{- end}}
            </div>
        </div>
    </div>
    {{- end}}
</div>
{{- end}}

{{- if .Packages }}
<div class="header">
    <h3 class="header__title ta-center">Packages</h3>
</div>

<table>
    <thead>
    <tr class="sub-header">
        <th data-type="string" data-sortable="true"><span> ID </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> Name </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> Version </span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> SrcName </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>
        <th data-type="string" data-sortable="true"><span> SrcVersion </span>
            <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
            </svg>
        </th>

    </tr>
    </thead>
    <tbody data-main="true">
    {{- range .Packages }}
    <tr class="filterable">
        <td class="pkg-version">{{ .ID }}</td>
        <td class="pkg-key-name">{{ .Name }}</td>
        <td class="pkg-key-version ta-center">{{ .Version }}</td>
        <td class="pkg-key-src-name">{{ .SrcName }}</td>
        <td class="pkg-key-src-version">{{ .SrcVersion }}</td>
    </tr>
    {{- end}}
    </tbody>
</table>
{{- end }}

{{- end }}

{{- end }}
{{- else }}
<h2> Trivy Returned Empty Report</h2>
{{- end }}

<script src="https://unpkg.com/cytoscape@3.30.2/dist/cytoscape.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>
    /*
     * highlight.js terraform syntax highlighting definition
     *
     * @see https://github.com/highlightjs/highlight.js
     *
     * :TODO:
     *
     * @package: highlightjs-terraform
     * @author:  Nikos Tsirmirakis <nikos.tsirmirakis@winopsdba.com>
     * @since:   2019-03-20
     *
     * Description: Terraform (HCL) language definition
     * Category: scripting
     */

    var module = module ? module : {};     // shim for browser use

    function hljsDefineTerraform(hljs) {
        var NUMBERS = {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?',
            relevance: 0
        };
        var STRINGS = {
            className: 'string',
            begin: '"',
            end: '"',
            contains: [{
                className: 'variable',
                begin: '\\${',
                end: '\\}',
                relevance: 9,
                contains: [{
                    className: 'string',
                    begin: '"',
                    end: '"'
                }, {
                    className: 'meta',
                    begin: '[A-Za-z_0-9]*' + '\\(',
                    end: '\\)',
                    contains: [
                        NUMBERS, {
                            className: 'string',
                            begin: '"',
                            end: '"',
                            contains: [{
                                className: 'variable',
                                begin: '\\${',
                                end: '\\}',
                                contains: [{
                                    className: 'string',
                                    begin: '"',
                                    end: '"',
                                    contains: [{
                                        className: 'variable',
                                        begin: '\\${',
                                        end: '\\}'
                                    }]
                                }, {
                                    className: 'meta',
                                    begin: '[A-Za-z_0-9]*' + '\\(',
                                    end: '\\)'
                                }]
                            }]
                        },
                        'self']
                }]
            }]
        };

        return {
            aliases: ['tf', 'hcl'],
            keywords: 'resource variable provider output locals module data terraform|10',
            literal: 'false true null',
            contains: [
                hljs.COMMENT('\\#', '$'),
                NUMBERS,
                STRINGS
            ]
        }
    }

    module.exports = function (hljs) {
        hljs.registerLanguage('terraform', hljsDefineTerraform);
    };

    module.exports.definer = hljsDefineTerraform;
</script>
<script type="text/javascript">
    hljs.registerLanguage('hcl', window.hljsDefineTerraform);
</script>
<script defer>
    const report = {{ .JsonData}};
    const codeNode = 1 << 1;
    const occurrenceNode = 1 << 2;
    let inWindow = false;
    let isGraphInitializing = false;
    let currentTable;
    let cy = cytoscape({
        container: document.querySelector('.graph'),
        elements: [],
        style: [
            {
                selector: 'node',
                style: {
                    label: 'data(label)',
                    'background-color': '#666',
                    color: '#000',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    width: '80px',
                    height: '80px',
                },
            },
            {
                selector: `node[type=${codeNode}]`,
                style: {
                    'background-color': '#c8c8c8',
                    'font-size': '14px',
                    'text-valign': 'center',
                    'text-halign': 'center',
                },
            },
            {
                selector: `node[type=${occurrenceNode}]`,
                style: {'background-color': '#1E90FF'},
            },
            {
                selector: 'edge',
                style: {
                    label: 'data(label)',
                    width: 3,
                    'line-color': '#ccc',
                    'curve-style': 'bezier',
                    'target-arrow-color': 'black',
                    'target-arrow-shape': 'triangle',
                },
            },
        ],
        layout: {
            name: 'cose',
        },
    });

    async function init() {
        function createSublist(tableIndex, misconfigurations) {
            const table = document.querySelector(`.misc-table[data-index = "${tableIndex}"]`);
            const content = document.querySelector(`.content[data-index = "${tableIndex}"]`)
            const allContent = document.querySelectorAll('.content');
            const allTables = document.querySelectorAll('table');
            const info = document.getElementById('info');

            misconfigurations.forEach((misconfig, idx) => {
                const listItem = document.querySelector(`[data-index="${tableIndex} ${idx}"]`);
                listItem.addEventListener('click', function (e) {
                    e.stopPropagation();
                    currentTable = table;
                    if (!inWindow ) {
                        changeContainer(tableIndex)
                        allTables.forEach((table) => {
                            table.style.width = "100%";

                        });

                        allContent.forEach((item) => {
                            item.style.display = "none";
                        });
                        info.style.position = 'absolute';

                        table.style.width = '70%';
                        content.style.display = 'flex';

                        removePlaceholderRows();
                        addPlaceholderRows();

                    } else {
                        info.style.position = 'fixed';
                    }

                    info.style.display = "none";
                    renderGraph(misconfig);
                });

            });

        }

        let results = [];
        if (report.Resources) {
            report.Resources.forEach((resource) => {
                results.push(...resource.Results);
            });
        } else {
            results = report.Results;
        }

        results.forEach((result, index) => {
            if (result.Misconfigurations === undefined) {
                return;
            }

            createSublist(index, result.Misconfigurations);

        });
    }

    window.onload = init;

    function addPlaceholderRows() {
        const rowCount = currentTable.querySelectorAll("tr").length;
        const targetRows = 10;
        const placeholderCount = targetRows - rowCount;

        for (let i = 0; i < placeholderCount; i++) {
            const placeholderRow = document.createElement("tr");
            placeholderRow.classList.add("placeholder-row");
            placeholderRow.innerHTML = "<td colspan='5'></td>";
            currentTable.querySelector("tbody").appendChild(placeholderRow);
        }
    }

    function removePlaceholderRows() {
        const placeholders = document.querySelectorAll(".placeholder-row");
        placeholders.forEach(row => row.remove());
    }

    function changeContainer(index) {
        const newContainer = document.querySelector(`.graph[data-index="${index}"]`);

        const elements = cy.json().elements.nodes ? cy.json().elements : [];

        const style = cy.style().json();

        cy.destroy();

        cy = cytoscape({
            container: newContainer,
            elements: elements,
            style: style,
            layout: {name: 'cose'}
        });

        addInfoEventsListening(index);
    }

    function addInfoEventsListening(index) {
        cy.on('tap', 'node', function (evt) {
            const node = evt.target;
            const infoBox = document.getElementById("info");
            const graphRect = document.querySelector(`.graph[data-index="${index}"]`).getBoundingClientRect();

            let content = '';
            if (node.data('type') === codeNode) {
                content = `<strong>Code Snippet:</strong><br><pre>${node.data('content')}</pre>`;
            } else if (node.data('type') === occurrenceNode) {
                content = `<strong>File:</strong> ${node.data('file')}<br><strong>Location:</strong> Lines ${node.data('start')} - ${node.data('end')}`;
            }

            let top = graphRect.top + evt.renderedPosition.y;
            let left = window.scrollX + graphRect.left + evt.renderedPosition.x;

            if (!inWindow){
                top += window.scrollY;
            }

            infoBox.innerHTML = content;
            infoBox.style.left = left + 'px';
            infoBox.style.top = top + 'px';
            infoBox.style.display = 'block';
        });

        cy.on('tap', function (event) {
            if (event.target === cy) {
                document.getElementById("info").style.display = 'none';
            }
        });
    }

    function renderGraph(misconf) {
        const nodes = [];
        const edges = [];

        if (misconf.CauseMetadata === undefined) {
            return;
        }

        const findingID = `finding`;
        if (misconf.CauseMetadata.Code?.Lines !== null) {
            const code = misconf.CauseMetadata.Code?.Lines.reduce((prev, curr, idx) => {
                if (idx === 0) {
                    return curr.Content;
                }
                return prev + '\n' + curr.Content;
            }, '');

            const highlightedCode = hljs.highlight(code, {language: 'hcl'}).value;

            nodes.push({
                data: {
                    id: findingID,
                    label: misconf.CauseMetadata.Resource,
                    type: codeNode,
                    content: highlightedCode,
                },
            });
        }

        if (misconf.CauseMetadata.Occurrences !== undefined) {
            misconf.CauseMetadata.Occurrences.forEach((occurrence, idx) => {
                const occurenceID = `${idx}-occurrence`;
                nodes.push({
                    data: {
                        id: occurenceID,
                        label: occurrence.Resource,
                        type: occurrenceNode,
                        file: occurrence.Filename,
                        start: occurrence.Location.StartLine,
                        end: occurrence.Location.EndLine,
                    },
                });

                const edgeID = `${idx}-edge`;

                // the first occurrence is the cause, which is stored in the cause metadata
                if (idx === 0) {
                    edges.push({
                        data: {
                            id: edgeID,
                            source: occurenceID,
                            target: findingID,
                            label: 'Caused by',
                        },
                    });
                } else {
                    const targetID = `${idx - 1}-occurrence`;

                    edges.push({
                        data: {
                            id: edgeID,
                            source: occurenceID,
                            target: targetID,
                            label: 'Caused by',
                        },
                    });
                }
            });
        }
        cy.elements().remove();
        cy.add(nodes);
        cy.add(edges);

        cy.layout({name: 'cose'}).run();

    }


    const allTables = document.querySelectorAll('table');
    const closeContent = document.querySelectorAll('.close-button');
    const content = document.querySelectorAll('.content');
    const info = document.getElementById('info');
    const movableWindow = document.getElementById('movable-window');
    const hideButton = document.querySelector('.hide-window');
    const openWindow = document.querySelectorAll('.open-window-button');

    closeContent.forEach((button) => {
        button.addEventListener('click', () => {
            info.style.display = 'none';
            allTables.forEach((table) => {
                table.style.width = "100%";

            });
            removePlaceholderRows();
            content.forEach((item) => {
                item.style.display = "none";
            });
        });

    });

    function closeMovableWindow(){
        movableWindow.style.display = 'none';
        info.style.display = 'none';
        inWindow = false;
    }

    document.querySelector('.close-window').addEventListener('click', () => {
       closeMovableWindow();
    });

    hideButton.addEventListener("click", () => {
        movableWindow.classList.toggle('hidden');
        info.style.display = 'none';
    });

    openWindow.forEach((button) => {
        button.addEventListener("click", () => {
            if (inWindow) {
                inWindow = false;
                let index = currentTable.getAttribute('data-index');
                let content = document.querySelector(`.content[data-index = "${index}"]`)
                closeMovableWindow();
                changeContainer(index);
                currentTable.style.width = '70%';
                info.style.display = 'none';
                info.style.position = 'absolute';
                content.style.display = 'flex';
            }
            else {
                inWindow = true;
                changeContainer("window");
                removePlaceholderRows();

                allTables.forEach((table) => {
                    table.style.width = '100%';
                });

                document.querySelectorAll('.content').forEach((item) => {
                    item.style.display = "none";
                });

                info.style.position = 'fixed';
                info.style.display = 'none';

                movableWindow.style.display = 'block';
            }

        });
    });


    const header = document.getElementById('movable-header');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - movableWindow.offsetLeft;
        offsetY = e.clientY - movableWindow.offsetTop;
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            newLeft = Math.max(0, Math.min(window.innerWidth - movableWindow.offsetWidth, newLeft));
            newTop = Math.max(0, Math.min(window.innerHeight - movableWindow.offsetHeight, newTop));

            movableWindow.style.left = newLeft + 'px';
            movableWindow.style.top = newTop + 'px';

            cy.resize()
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = '';
    });
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    const severityOrder = {
        UNKNOWN: {order: 5},
        LOW: {order: 4},
        MEDIUM: {order: 3},
        HIGH: {order: 2},
        CRITICAL: {order: 1},
    };

    function attachLinksInteractivity() {
        document.querySelectorAll("td.links").forEach(function (linkCell) {
            const links = [].concat.apply([], linkCell.querySelectorAll("a"));
            [].sort.apply(links, function (a, b) {
                return a.href > b.href ? 1 : -1;
            });
            links.forEach(function (link, idx) {
                if (links.length > 0 && 0 === idx) {
                    const toggleLink = document.createElement("a");
                    toggleLink.innerText = "Toggle more links";
                    toggleLink.href = "#toggleMore";
                    toggleLink.setAttribute("class", "toggle-more-links");
                    linkCell.appendChild(toggleLink);
                }
                linkCell.appendChild(link);
            });
        });

        document
            .querySelectorAll("a.toggle-more-links")
            .forEach(function (toggleLink) {
                toggleLink.onclick = function () {
                    const expanded =
                        toggleLink.parentElement.getAttribute("data-more-links");
                    toggleLink.parentElement.setAttribute(
                        "data-more-links",
                        "on" === expanded ? "off" : "on"
                    );
                    return false;
                };
            });
    }

    function attachFilterInteractivity() {
        const filterBar = document.querySelector(".filter_bar");
        const nameFilter = filterBar.querySelector(".filter_bar__filter_name");
        const filterable = document.querySelectorAll(".filterable");
        const cellClasses = [
            ".pkg-name",
            ".vuln",
            ".misc-type",
            ".misc-id",
            ".severity",
            ".pkg-version",
            ".pkg-key-name",
            ".pkg-key-version",
            ".pkg-key-src-name",
            ".pkg-key-src-version",
        ];

        function applyFilters(filterValue) {
            filterable.forEach((f) => {
                const cellValues = cellClasses
                    .map((cl) => f.querySelector(cl))
                    .filter((cell) => cell !== null)
                    .map((cell) => cell.textContent || cell.innerText);

                const condition = cellValues.some((cellValue) =>
                    cellValue.toUpperCase().includes(filterValue.toUpperCase())
                );

                f.style.display = condition ? "" : "none";
            });
        }

        nameFilter.addEventListener("keyup", (e) => {
            applyFilters(e.target.value);
        });
    }

    function attachSortInteractivity() {
        let colIx = -1;
        const tables = document.querySelectorAll("table");
        const sortTable = (tableIx, cellIndex, type, isSorded) => {
            const table = tables[tableIx];
            const tbody = table.querySelector('tbody[data-main="true"]');
            const thead = table.querySelector("thead");
            const inv = (val) => (isSorded ? -val : val);
            const compare = (a, b) => {
                if (!a.cells[cellIndex] || !b.cells[cellIndex]) return 0;
                const rowA = a.cells[cellIndex].innerHTML;
                const rowB = b.cells[cellIndex].innerHTML;
                if (type === "string") {
                    if (rowA < rowB) return inv(-1);
                    if (rowA > rowB) return inv(1);
                    return 0;
                }
                if (type === "severity") {
                    const orderA = severityOrder[rowA].order;
                    const orderB = severityOrder[rowB].order;
                    if (orderA < orderB) return inv(-1);
                    if (orderA > orderB) return inv(1);
                    return 0;
                }
            };
            let rows = Array(...tbody.rows);
            rows.sort(compare);
            table.removeChild(tbody);
            rows.forEach((row) => {
                tbody.appendChild(row);
            });
            insertAfter(thead, tbody);
        };
        tables.forEach((table, tableIx) => {
            table.addEventListener("click", (e) => {
                e.stopPropagation();
                const el = e.target;
                const type = el.getAttribute("data-type");
                const sortable = el.getAttribute("data-sortable") === "true";
                if (el.nodeName !== "TH" || !sortable) return;
                const cellIndex = el.cellIndex;
                sortTable(tableIx, cellIndex, type, colIx === cellIndex);
                colIx = colIx === cellIndex ? -1 : cellIndex;
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        attachLinksInteractivity();
        attachSortInteractivity();
        attachFilterInteractivity();
    });
</script>
</body>
</html>