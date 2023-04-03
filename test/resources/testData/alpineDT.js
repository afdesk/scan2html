const testData = {
	"SchemaVersion": 2,
	"ArtifactName": "alpine:3.14.1",
	"ArtifactType": "container_image",
	"Metadata": {
		"OS": {
			"Family": "alpine",
			"Name": "3.14.1"
		},
		"ImageID": "sha256:021b3423115ff662225e83d7e2606475217de7b55fde83ce3447a54019a77aa2",
		"DiffIDs": [
			"sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
		],
		"RepoTags": [
			"alpine:3.14.1"
		],
		"RepoDigests": [
			"alpine@sha256:eb3e4e175ba6d212ba1d6e04fc0782916c08e1c9d7b45892e9796141b1d379ae"
		],
		"ImageConfig": {
			"architecture": "amd64",
			"container": "72bdff81d8bf6dfb5d83e6cbdd59564e419e3a97931ce4e31dd3f215eae4914c",
			"created": "2021-08-06T17:19:45.183996158Z",
			"docker_version": "20.10.7",
			"history": [
				{
					"created": "2021-08-06T17:19:45.007652184Z",
					"created_by": "/bin/sh -c #(nop) ADD file:34eb5c40aa00028921a224d1764ae1b1f3ef710d191e4dfc7df55e0594aa7217 in / "
				},
				{
					"created": "2021-08-06T17:19:45.183996158Z",
					"created_by": "/bin/sh -c #(nop)  CMD [\"/bin/sh\"]",
					"empty_layer": true
				}
			],
			"os": "linux",
			"rootfs": {
				"type": "layers",
				"diff_ids": [
					"sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
				]
			},
			"config": {
				"Cmd": [
					"/bin/sh"
				],
				"Env": [
					"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
				],
				"Image": "sha256:dc0d5c673ee2846463a00ec42d78344d3d5f37ac23c0723da4cd0051c16f4ef4"
			}
		}
	},
	"Results": [
		{
			"Target": "alpine:3.14.1 (alpine 3.14.1)",
			"Class": "os-pkgs",
			"Type": "alpine",
			"Packages": [
				{
					"ID": "alpine-baselayout@3.2.0-r16",
					"Name": "alpine-baselayout",
					"Version": "3.2.0-r16",
					"SrcName": "alpine-baselayout",
					"SrcVersion": "3.2.0-r16",
					"Licenses": [
						"GPL-2.0"
					],
					"DependsOn": [
						"busybox@1.33.1-r3",
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "alpine-keys@2.3-r1",
					"Name": "alpine-keys",
					"Version": "2.3-r1",
					"SrcName": "alpine-keys",
					"SrcVersion": "2.3-r1",
					"Licenses": [
						"MIT"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "apk-tools@2.12.7-r0",
					"Name": "apk-tools",
					"Version": "2.12.7-r0",
					"SrcName": "apk-tools",
					"SrcVersion": "2.12.7-r0",
					"Licenses": [
						"GPL-2.0"
					],
					"DependsOn": [
						"libcrypto1.1@1.1.1k-r0",
						"libssl1.1@1.1.1k-r0",
						"musl@1.2.2-r3",
						"zlib@1.2.11-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "busybox@1.33.1-r3",
					"Name": "busybox",
					"Version": "1.33.1-r3",
					"SrcName": "busybox",
					"SrcVersion": "1.33.1-r3",
					"Licenses": [
						"GPL-2.0"
					],
					"DependsOn": [
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "ca-certificates-bundle@20191127-r5",
					"Name": "ca-certificates-bundle",
					"Version": "20191127-r5",
					"SrcName": "ca-certificates",
					"SrcVersion": "20191127-r5",
					"Licenses": [
						"MPL-2.0",
						"MIT"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "libc-utils@0.7.2-r3",
					"Name": "libc-utils",
					"Version": "0.7.2-r3",
					"SrcName": "libc-dev",
					"SrcVersion": "0.7.2-r3",
					"Licenses": [
						"BSD-2-Clause",
						"BSD-3-Clause"
					],
					"DependsOn": [
						"musl-utils@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "libcrypto1.1@1.1.1k-r0",
					"Name": "libcrypto1.1",
					"Version": "1.1.1k-r0",
					"SrcName": "openssl",
					"SrcVersion": "1.1.1k-r0",
					"Licenses": [
						"OpenSSL"
					],
					"DependsOn": [
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "libretls@3.3.3p1-r2",
					"Name": "libretls",
					"Version": "3.3.3p1-r2",
					"SrcName": "libretls",
					"SrcVersion": "3.3.3p1-r2",
					"Licenses": [
						"ISC",
						"BSD-3-Clause",
						"MIT"
					],
					"DependsOn": [
						"ca-certificates-bundle@20191127-r5",
						"libcrypto1.1@1.1.1k-r0",
						"libssl1.1@1.1.1k-r0",
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "libssl1.1@1.1.1k-r0",
					"Name": "libssl1.1",
					"Version": "1.1.1k-r0",
					"SrcName": "openssl",
					"SrcVersion": "1.1.1k-r0",
					"Licenses": [
						"OpenSSL"
					],
					"DependsOn": [
						"libcrypto1.1@1.1.1k-r0",
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "musl@1.2.2-r3",
					"Name": "musl",
					"Version": "1.2.2-r3",
					"SrcName": "musl",
					"SrcVersion": "1.2.2-r3",
					"Licenses": [
						"MIT"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "musl-utils@1.2.2-r3",
					"Name": "musl-utils",
					"Version": "1.2.2-r3",
					"SrcName": "musl",
					"SrcVersion": "1.2.2-r3",
					"Licenses": [
						"MIT",
						"BSD-3-Clause",
						"GPL-2.0"
					],
					"DependsOn": [
						"musl@1.2.2-r3",
						"scanelf@1.3.2-r0"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "scanelf@1.3.2-r0",
					"Name": "scanelf",
					"Version": "1.3.2-r0",
					"SrcName": "pax-utils",
					"SrcVersion": "1.3.2-r0",
					"Licenses": [
						"GPL-2.0"
					],
					"DependsOn": [
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "ssl_client@1.33.1-r3",
					"Name": "ssl_client",
					"Version": "1.33.1-r3",
					"SrcName": "busybox",
					"SrcVersion": "1.33.1-r3",
					"Licenses": [
						"GPL-2.0"
					],
					"DependsOn": [
						"libretls@3.3.3p1-r2",
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				},
				{
					"ID": "zlib@1.2.11-r3",
					"Name": "zlib",
					"Version": "1.2.11-r3",
					"SrcName": "zlib",
					"SrcVersion": "1.2.11-r3",
					"Licenses": [
						"Zlib"
					],
					"DependsOn": [
						"musl@1.2.2-r3"
					],
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					}
				}
			],
			"Vulnerabilities": [
				{
					"VulnerabilityID": "CVE-2021-42378",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42378",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_i()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_i function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42378",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42378",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42378",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:22:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42379",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42379",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the next_input_file()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the next_input_file function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42379",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42379",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42379",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:22:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42380",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42380",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the clrvar()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the clrvar function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42380",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42380",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42380",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:10:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42381",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42381",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the hash_init()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the hash_init function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42381",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42381",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42381",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:13:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42382",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42382",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_s()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_s function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42382",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42382",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42382",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:16:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42383",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42383",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42383",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://security.netapp.com/advisory/ntap-20211223-0002/"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:16:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42384",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42384",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the handle_special()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the handle_special function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42384",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42384",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42384",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42385",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42385",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42385",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42385",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42385",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42386",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42386",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the nvalloc()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the nvalloc function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42386",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42386",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42386",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-28391",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r7",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-28391",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: remote attackers may execute arbitrary code if netstat is used",
					"Description": "BusyBox through 1.35.0 allows remote attackers to execute arbitrary code if netstat is used to print a DNS PTR record's value to a VT compatible terminal. Alternatively, the attacker could choose to change the terminal's colors.",
					"Severity": "HIGH",
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
							"V2Score": 6.8,
							"V3Score": 8.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V3Score": 6.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2022-28391",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28391",
						"https://git.alpinelinux.org/aports/plain/main/busybox/0001-libbb-sockaddr2str-ensure-only-printable-characters-.patch",
						"https://git.alpinelinux.org/aports/plain/main/busybox/0002-nslookup-sanitize-all-printed-strings-with-printable.patch",
						"https://gitlab.alpinelinux.org/alpine/aports/-/issues/13661",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-28391"
					],
					"PublishedDate": "2022-04-03T21:15:00Z",
					"LastModifiedDate": "2022-08-11T18:44:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42374",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r4",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42374",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: out-of-bounds read in unlzma applet leads to information leak and denial of service when crafted LZMA-compressed input is decompressed",
					"Description": "An out-of-bounds heap read in Busybox's unlzma applet leads to information leak and denial of service when crafted LZMA-compressed input is decompressed. This can be triggered by any applet/format that",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-125"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:M/Au:N/C:P/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:H",
							"V2Score": 3.3,
							"V3Score": 5.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:H",
							"V3Score": 5.7
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42374",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42374",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42374",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-03-31T16:29:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42375",
					"PkgID": "busybox@1.33.1-r3",
					"PkgName": "busybox",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r5",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42375",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: incorrect handling of a special element in ash applet leads to denial of service when processing a crafted shell command",
					"Description": "An incorrect handling of a special element in Busybox's ash applet leads to denial of service when processing a crafted shell command, due to the shell mistaking specific characters for reserved characters. This may be used for DoS under rare conditions of filtered command input.",
					"Severity": "MEDIUM",
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:M/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 1.9,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:H/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 4.1
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42375",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://security.netapp.com/advisory/ntap-20211223-0002/"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-03-31T16:29:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-3711",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1l-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-3711",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: SM2 Decryption Buffer Overflow",
					"Description": "In order to decrypt SM2 encrypted data an application is expected to call the API function EVP_PKEY_decrypt(). Typically an application will call this function twice. The first time, on entry, the \"out\" parameter can be NULL and, on exit, the \"outlen\" parameter is populated with the buffer size required to hold the decrypted plaintext. The application can then allocate a sufficiently sized buffer and call EVP_PKEY_decrypt() again, but this time passing a non-NULL value for the \"out\" parameter. A bug in the implementation of the SM2 decryption code means that the calculation of the buffer size required to hold the plaintext returned by the first call to EVP_PKEY_decrypt() can be smaller than the actual size required by the second call. This can lead to a buffer overflow when EVP_PKEY_decrypt() is called by the application a second time with a buffer that is too small. A malicious attacker who is able present SM2 content for decryption to an application could cause attacker chosen data to overflow the buffer by up to a maximum of 62 bytes altering the contents of other data held after the buffer, possibly changing application behaviour or causing the application to crash. The location of the buffer is application dependent but is typically heap allocated. Fixed in OpenSSL 1.1.1l (Affected 1.1.1-1.1.1k).",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-120"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 7.5,
							"V3Score": 9.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2021/08/26/2",
						"https://access.redhat.com/security/cve/CVE-2021-3711",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-389290.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3711",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=59f5e75f3bced8fc0e130d72a3f582cf7b480b46",
						"https://github.com/advisories/GHSA-5ww6-px42-wc85",
						"https://lists.apache.org/thread.html/r18995de860f0e63635f3008fd2a6aca82394249476d21691e7c59c9e@%3Cdev.tomcat.apache.org%3E",
						"https://lists.apache.org/thread.html/rad5d9f83f0d11fb3f8bb148d179b8a9ad7c6a17f18d70e5805a713d1@%3Cdev.tomcat.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-3711",
						"https://rustsec.org/advisories/RUSTSEC-2021-0097.html",
						"https://security.gentoo.org/glsa/202209-02",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20210827-0010/",
						"https://security.netapp.com/advisory/ntap-20211022-0003/",
						"https://ubuntu.com/security/notices/USN-5051-1",
						"https://www.debian.org/security/2021/dsa-4963",
						"https://www.openssl.org/news/secadv/20210824.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html",
						"https://www.oracle.com/security-alerts/cpuoct2021.html",
						"https://www.tenable.com/security/tns-2021-16",
						"https://www.tenable.com/security/tns-2022-02"
					],
					"PublishedDate": "2021-08-24T15:15:00Z",
					"LastModifiedDate": "2022-12-06T21:23:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-3712",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1l-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-3712",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Read buffer overruns processing ASN.1 strings",
					"Description": "ASN.1 strings are represented internally within OpenSSL as an ASN1_STRING structure which contains a buffer holding the string data and a field holding the buffer length. This contrasts with normal C strings which are repesented as a buffer for the string data which is terminated with a NUL (0) byte. Although not a strict requirement, ASN.1 strings that are parsed using OpenSSL's own \"d2i\" functions (and other similar parsing functions) as well as any string whose value has been set with the ASN1_STRING_set() function will additionally NUL terminate the byte array in the ASN1_STRING structure. However, it is possible for applications to directly construct valid ASN1_STRING structures which do not NUL terminate the byte array by directly setting the \"data\" and \"length\" fields in the ASN1_STRING array. This can also happen by using the ASN1_STRING_set0() function. Numerous OpenSSL functions that print ASN.1 data have been found to assume that the ASN1_STRING byte array will be NUL terminated, even though this is not guaranteed for strings that have been directly constructed. Where an application requests an ASN.1 structure to be printed, and where that ASN.1 structure contains ASN1_STRINGs that have been directly constructed by the application without NUL terminating the \"data\" field, then a read buffer overrun can occur. The same thing can also occur during name constraints processing of certificates (for example if a certificate has been directly constructed by the application instead of loading it via the OpenSSL parsing functions, and the certificate contains non NUL terminated ASN1_STRING structures). It can also occur in the X509_get1_email(), X509_REQ_get1_email() and X509_get1_ocsp() functions. If a malicious actor can cause an application to directly construct an ASN1_STRING and then process it through one of the affected OpenSSL functions then this issue could be hit. This might result in a crash (causing a Denial of Service attack). It could also result in the disclosure of private memory contents (such as private keys, or sensitive plaintext). Fixed in OpenSSL 1.1.1l (Affected 1.1.1-1.1.1k). Fixed in OpenSSL 1.0.2za (Affected 1.0.2-1.0.2y).",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-125"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:P/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V2Score": 5.8,
							"V3Score": 7.4
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2021/08/26/2",
						"https://access.redhat.com/hydra/rest/securitydata/cve/CVE-2021-3712.json",
						"https://access.redhat.com/security/cve/CVE-2021-3712",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-244969.pdf",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-389290.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3712",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=94d23fcff9b2a7a8368dfe52214d5c2569882c11",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=ccb0a11145ee72b042d10593a64eaf9e8a55ec12",
						"https://github.com/advisories/GHSA-q9wj-f4qw-6vfj",
						"https://kc.mcafee.com/corporate/index?page=content\u0026id=SB10366",
						"https://linux.oracle.com/cve/CVE-2021-3712.html",
						"https://linux.oracle.com/errata/ELSA-2022-9023.html",
						"https://lists.apache.org/thread.html/r18995de860f0e63635f3008fd2a6aca82394249476d21691e7c59c9e@%3Cdev.tomcat.apache.org%3E",
						"https://lists.apache.org/thread.html/rad5d9f83f0d11fb3f8bb148d179b8a9ad7c6a17f18d70e5805a713d1@%3Cdev.tomcat.apache.org%3E",
						"https://lists.debian.org/debian-lts-announce/2021/09/msg00014.html",
						"https://lists.debian.org/debian-lts-announce/2021/09/msg00021.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-3712",
						"https://rustsec.org/advisories/RUSTSEC-2021-0098.html",
						"https://security.gentoo.org/glsa/202209-02",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20210827-0010/",
						"https://ubuntu.com/security/notices/USN-5051-1",
						"https://ubuntu.com/security/notices/USN-5051-2",
						"https://ubuntu.com/security/notices/USN-5051-3",
						"https://ubuntu.com/security/notices/USN-5051-4 (regression only in trusty/esm)",
						"https://ubuntu.com/security/notices/USN-5088-1",
						"https://www.debian.org/security/2021/dsa-4963",
						"https://www.openssl.org/news/secadv/20210824.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html",
						"https://www.oracle.com/security-alerts/cpuoct2021.html",
						"https://www.tenable.com/security/tns-2021-16",
						"https://www.tenable.com/security/tns-2022-02"
					],
					"PublishedDate": "2021-08-24T15:15:00Z",
					"LastModifiedDate": "2022-12-06T21:23:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-0778",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1n-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-0778",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Infinite loop in BN_mod_sqrt() reachable when parsing certificates",
					"Description": "The BN_mod_sqrt() function, which computes a modular square root, contains a bug that can cause it to loop forever for non-prime moduli. Internally this function is used when parsing certificates that contain elliptic curve public keys in compressed form or explicit elliptic curve parameters with a base point encoded in compressed form. It is possible to trigger the infinite loop by crafting a certificate that has invalid explicit curve parameters. Since certificate parsing happens prior to verification of the certificate signature, any process that parses an externally supplied certificate may thus be subject to a denial of service attack. The infinite loop can also be reached when parsing crafted private keys as they can contain explicit elliptic curve parameters. Thus vulnerable situations include: - TLS clients consuming server certificates - TLS servers consuming client certificates - Hosting providers taking certificates or private keys from customers - Certificate authorities parsing certification requests from subscribers - Anything else which parses ASN.1 elliptic curve parameters Also any other applications that use the BN_mod_sqrt() where the attacker can control the parameter values are vulnerable to this DoS issue. In the OpenSSL 1.0.2 version the public key is not parsed during initial parsing of the certificate which makes it slightly harder to trigger the infinite loop. However any operation which requires the public key from the certificate will trigger the infinite loop. In particular the attacker can use a self-signed certificate to trigger the loop during verification of the certificate signature. This issue affects OpenSSL versions 1.0.2, 1.1.1 and 3.0. It was addressed in the releases of 1.1.1n and 3.0.2 on the 15th March 2022. Fixed in OpenSSL 3.0.2 (Affected 3.0.0,3.0.1). Fixed in OpenSSL 1.1.1n (Affected 1.1.1-1.1.1m). Fixed in OpenSSL 1.0.2zd (Affected 1.0.2-1.0.2zc).",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-835"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"http://packetstormsecurity.com/files/167344/OpenSSL-1.0.2-1.1.1-3.0-BN_mod_sqrt-Infinite-Loop.html",
						"http://seclists.org/fulldisclosure/2022/May/33",
						"http://seclists.org/fulldisclosure/2022/May/35",
						"http://seclists.org/fulldisclosure/2022/May/38",
						"https://access.redhat.com/errata/RHSA-2022:5326",
						"https://access.redhat.com/security/cve/CVE-2022-0778",
						"https://bugzilla.redhat.com/2062202",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2062202",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-712929.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-0778",
						"https://errata.almalinux.org/8/ALSA-2022-5326.html",
						"https://errata.rockylinux.org/RLSA-2022:4899",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=3118eb64934499d93db3230748a452351d1d9a65",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=380085481c64de749a6dd25cdf0bcf4360b30f83",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=a466912611aa6cbdf550cd10601390e587451246",
						"https://github.com/advisories/GHSA-x3mh-jvjw-3xwx",
						"https://linux.oracle.com/cve/CVE-2022-0778.html",
						"https://linux.oracle.com/errata/ELSA-2022-9272.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00023.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00024.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/323SNN6ZX7PRJJWP2BUAFLPUAE42XWLZ/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/GDB3GQVJPXJE7X5C5JN6JAA4XUDWD6E6/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/W6K3PR542DXWLEFFMFIDMME4CWMHJRMG/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-0778",
						"https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2022-0002",
						"https://rustsec.org/advisories/RUSTSEC-2022-0014.html",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20220321-0002/",
						"https://security.netapp.com/advisory/ntap-20220429-0005/",
						"https://support.apple.com/kb/HT213255",
						"https://support.apple.com/kb/HT213256",
						"https://support.apple.com/kb/HT213257",
						"https://ubuntu.com/security/notices/USN-5328-1",
						"https://ubuntu.com/security/notices/USN-5328-2",
						"https://www.debian.org/security/2022/dsa-5103",
						"https://www.openssl.org/news/secadv/20220315.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujul2022.html",
						"https://www.tenable.com/security/tns-2022-06",
						"https://www.tenable.com/security/tns-2022-07",
						"https://www.tenable.com/security/tns-2022-08",
						"https://www.tenable.com/security/tns-2022-09"
					],
					"PublishedDate": "2022-03-15T17:15:00Z",
					"LastModifiedDate": "2022-11-09T20:43:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-4450",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-4450",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: double free after calling PEM_read_bio_ex",
					"Description": "The function PEM_read_bio_ex() reads a PEM file from a BIO and parses and decodes the \"name\" (e.g. \"CERTIFICATE\"), any header data and the payload data. If the function succeeds then the \"name_out\", \"header\" and \"data\" arguments are populated with pointers to buffers containing the relevant decoded data. The caller is responsible for freeing those buffers. It is possible to construct a PEM file that results in 0 bytes of payload data. In this case PEM_read_bio_ex() will return a failure code but will populate the header argument with a pointer to a buffer that has already been freed. If the caller also frees this buffer then a double free will occur. This will most likely lead to a crash. This could be exploited by an attacker who has the ability to supply malicious PEM files for parsing to achieve a denial of service attack. The functions PEM_read_bio() and PEM_read() are simple wrappers around PEM_read_bio_ex() and therefore these functions are also directly affected. These functions are also called indirectly by a number of other OpenSSL functions including PEM_X509_INFO_read_bio_ex() and SSL_CTX_use_serverinfo_file() which are also vulnerable. Some OpenSSL internal uses of these functions are not vulnerable because the caller does not free the header argument if PEM_read_bio_ex() returns a failure code. These locations include the PEM_read_bio_TYPE() functions as well as the decoders introduced in OpenSSL 3.0. The OpenSSL asn1parse command line application is also impacted by this issue.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-415"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2022-4450",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-4450",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=63bcf189be73a9cc1264059bed6f57974be74a83",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=bbcf509bd046b34cca19c766bbddc31683d0858b",
						"https://github.com/advisories/GHSA-v5w6-wcm8-jm4q",
						"https://linux.oracle.com/cve/CVE-2022-4450.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-4450",
						"https://rustsec.org/advisories/RUSTSEC-2023-0010.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0215",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0215",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: use-after-free following BIO_new_NDEF",
					"Description": "The public API function BIO_new_NDEF is a helper function used for streaming ASN.1 data via a BIO. It is primarily used internally to OpenSSL to support the SMIME, CMS and PKCS7 streaming capabilities, but may also be called directly by end user applications. The function receives a BIO from the caller, prepends a new BIO_f_asn1 filter BIO onto the front of it to form a BIO chain, and then returns the new head of the BIO chain to the caller. Under certain conditions, for example if a CMS recipient public key is invalid, the new filter BIO is freed and the function returns a NULL result indicating a failure. However, in this case, the BIO chain is not properly cleaned up and the BIO passed by the caller still retains internal pointers to the previously freed filter BIO. If the caller then goes on to call BIO_pop() on the BIO then a use-after-free will occur. This will most likely result in a crash. This scenario occurs directly in the internal function B64_write_ASN1() which may cause BIO_new_NDEF() to be called and will subsequently call BIO_pop() on the BIO. This internal function is in turn called by the public API functions PEM_write_bio_ASN1_stream, PEM_write_bio_CMS_stream, PEM_write_bio_PKCS7_stream, SMIME_write_ASN1, SMIME_write_CMS and SMIME_write_PKCS7. Other public API functions that may be impacted by this include i2d_ASN1_bio_stream, BIO_new_CMS, BIO_new_PKCS7, i2d_CMS_bio_stream and i2d_PKCS7_bio_stream. The OpenSSL cms and smime command line applications are similarly affected.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2023-0215",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0215",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=8818064ce3c3c0f1b740a5aaba2a987e75bfbafd",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=9816136fe31d92ace4037d5da5257f763aeeb4eb",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=c3829dd8825c654652201e16f8a0a0c46ee3f344",
						"https://github.com/advisories/GHSA-r7jw-wp68-3xch",
						"https://linux.oracle.com/cve/CVE-2023-0215.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2023-0215",
						"https://rustsec.org/advisories/RUSTSEC-2023-0009.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://ubuntu.com/security/notices/USN-5845-1",
						"https://ubuntu.com/security/notices/USN-5845-2",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0286",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0286",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: X.400 address type confusion in X.509 GeneralName",
					"Description": "There is a type confusion vulnerability relating to X.400 address processing inside an X.509 GeneralName. X.400 addresses were parsed as an ASN1_STRING but the public structure definition for GENERAL_NAME incorrectly specified the type of the x400Address field as ASN1_TYPE. This field is subsequently interpreted by the OpenSSL function GENERAL_NAME_cmp as an ASN1_TYPE rather than an ASN1_STRING. When CRL checking is enabled (i.e. the application sets the X509_V_FLAG_CRL_CHECK flag), this vulnerability may allow an attacker to pass arbitrary pointers to a memcmp call, enabling them to read memory contents or enact a denial of service. In most cases, the attack requires the attacker to provide both the certificate chain and CRL, neither of which need to have a valid signature. If the attacker only controls one of these inputs, the other input must already contain an X.400 address as a CRL distribution point, which is uncommon. As such, this vulnerability is most likely to only affect applications which have implemented their own functionality for retrieving CRLs over a network.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-843"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2023-0286",
						"https://access.redhat.com/security/cve/cve-2023-0286",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0286",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2c6c9d439b484e1ba9830d8454a34fa4f80fdfe9",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2f7530077e0ef79d98718138716bc51ca0cad658",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=fd2af07dc083a350c959147097003a14a5e8ac4d",
						"https://github.com/advisories/GHSA-x4qr-2fvf-3mr5",
						"https://github.com/pyca/cryptography/security/advisories/GHSA-x4qr-2fvf-3mr5",
						"https://linux.oracle.com/cve/CVE-2023-0286.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2023-0286",
						"https://rustsec.org/advisories/RUSTSEC-2023-0006.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://ubuntu.com/security/notices/USN-5845-1",
						"https://ubuntu.com/security/notices/USN-5845-2",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-2097",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1q-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-2097",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: AES OCB fails to encrypt some bytes",
					"Description": "AES OCB mode for 32-bit x86 platforms using the AES-NI assembly optimised implementation will not encrypt the entirety of the data under some circumstances. This could reveal sixteen bytes of data that was preexisting in the memory that wasn't written. In the special case of \"in place\" encryption, sixteen bytes of the plaintext would be revealed. Since OpenSSL does not support OCB based cipher suites for TLS and DTLS, they are both unaffected. Fixed in OpenSSL 3.0.5 (Affected 3.0.0-3.0.4). Fixed in OpenSSL 1.1.1q (Affected 1.1.1-1.1.1p).",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-326"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
							"V2Score": 5,
							"V3Score": 5.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 5.3
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2022:6224",
						"https://access.redhat.com/security/cve/CVE-2022-2097",
						"https://bugzilla.redhat.com/2081494",
						"https://bugzilla.redhat.com/2087911",
						"https://bugzilla.redhat.com/2087913",
						"https://bugzilla.redhat.com/2097310",
						"https://bugzilla.redhat.com/2104905",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2081494",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2097310",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2100554",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2104905",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-332410.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-1292",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2068",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2097",
						"https://errata.almalinux.org/9/ALSA-2022-6224.html",
						"https://errata.rockylinux.org/RLSA-2022:5818",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=919925673d6c9cfed3c1085497f5dfbbed5fc431",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=a98f339ddd7e8f487d6e0088d4a9a42324885a93",
						"https://github.com/advisories/GHSA-3wx7-46ch-7rq2",
						"https://linux.oracle.com/cve/CVE-2022-2097.html",
						"https://linux.oracle.com/errata/ELSA-2022-9751.html",
						"https://lists.debian.org/debian-lts-announce/2023/02/msg00019.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/R6CK57NBQFTPUMXAPJURCGXUYT76NQAK/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/V6567JERRHHJW2GNGJGKDRNHR7SNPZK7/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/VCMNWKERPBKOEBNL7CLTTX3ZZCZLH7XA/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-2097",
						"https://rustsec.org/advisories/RUSTSEC-2022-0032.html",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20220715-0011/",
						"https://ubuntu.com/security/notices/USN-5502-1",
						"https://www.debian.org/security/2023/dsa-5343",
						"https://www.openssl.org/news/secadv/20220705.txt"
					],
					"PublishedDate": "2022-07-05T11:15:00Z",
					"LastModifiedDate": "2023-02-23T16:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-4304",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-4304",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: timing attack in RSA Decryption implementation",
					"Description": "A timing based side channel exists in the OpenSSL RSA Decryption implementation which could be sufficient to recover a plaintext across a network in a Bleichenbacher style attack. To achieve a successful decryption an attacker would have to be able to send a very large number of trial messages for decryption. The vulnerability affects all RSA padding modes: PKCS#1 v1.5, RSA-OEAP and RSASVE. For example, in a TLS connection, RSA is commonly used by a client to send an encrypted pre-master secret to the server. An attacker that had observed a genuine connection between a client and a server could use this flaw to send trial messages to the server and record the time taken to process them. After a sufficiently large number of messages the attacker could recover the pre-master secret used for the original connection and thus be able to decrypt the application data sent over that connection.",
					"Severity": "MEDIUM",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.9
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.9
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N",
							"V3Score": 5.9
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2022-4304",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-4304",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://github.com/advisories/GHSA-p52g-cm5j-mjv4",
						"https://linux.oracle.com/cve/CVE-2022-4304.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-4304",
						"https://rustsec.org/advisories/RUSTSEC-2023-0007.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T17:13:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0464",
					"PkgID": "libcrypto1.1@1.1.1k-r0",
					"PkgName": "libcrypto1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r1",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0464",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Denial of service by excessive resource usage in verifying X509 policy constraints",
					"Description": "A security vulnerability has been identified in all supported versions of OpenSSL related to the verification of X.509 certificate chains that include policy constraints. Attackers may be able to exploit this vulnerability by creating a malicious certificate chain that triggers exponential use of computational resources, leading to a denial-of-service (DoS) attack on affected systems. Policy processing is disabled by default but can be enabled by passing the `-policy' argument to the command line utilities or by calling the `X509_VERIFY_PARAM_set1_policies()' function.",
					"Severity": "MEDIUM",
					"CVSS": {
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 5.9
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2023-0464",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0464",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2017771e2db3e2b96f89bbe8766c3209f6a99545",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2dcd4f1e3115f38cefa43e3efbe9b801c27e642e",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=879f7080d7e141f415c79eaa3a8ac4a3dad0348b",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=959c59c7a0164117e7f8366466a32bb1f8d77ff1",
						"https://www.openssl.org/news/secadv/20230322.txt"
					],
					"PublishedDate": "2023-03-22T17:15:00Z",
					"LastModifiedDate": "2023-03-22T18:10:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-0778",
					"PkgID": "libretls@3.3.3p1-r2",
					"PkgName": "libretls",
					"InstalledVersion": "3.3.3p1-r2",
					"FixedVersion": "3.3.3p1-r3",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-0778",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Infinite loop in BN_mod_sqrt() reachable when parsing certificates",
					"Description": "The BN_mod_sqrt() function, which computes a modular square root, contains a bug that can cause it to loop forever for non-prime moduli. Internally this function is used when parsing certificates that contain elliptic curve public keys in compressed form or explicit elliptic curve parameters with a base point encoded in compressed form. It is possible to trigger the infinite loop by crafting a certificate that has invalid explicit curve parameters. Since certificate parsing happens prior to verification of the certificate signature, any process that parses an externally supplied certificate may thus be subject to a denial of service attack. The infinite loop can also be reached when parsing crafted private keys as they can contain explicit elliptic curve parameters. Thus vulnerable situations include: - TLS clients consuming server certificates - TLS servers consuming client certificates - Hosting providers taking certificates or private keys from customers - Certificate authorities parsing certification requests from subscribers - Anything else which parses ASN.1 elliptic curve parameters Also any other applications that use the BN_mod_sqrt() where the attacker can control the parameter values are vulnerable to this DoS issue. In the OpenSSL 1.0.2 version the public key is not parsed during initial parsing of the certificate which makes it slightly harder to trigger the infinite loop. However any operation which requires the public key from the certificate will trigger the infinite loop. In particular the attacker can use a self-signed certificate to trigger the loop during verification of the certificate signature. This issue affects OpenSSL versions 1.0.2, 1.1.1 and 3.0. It was addressed in the releases of 1.1.1n and 3.0.2 on the 15th March 2022. Fixed in OpenSSL 3.0.2 (Affected 3.0.0,3.0.1). Fixed in OpenSSL 1.1.1n (Affected 1.1.1-1.1.1m). Fixed in OpenSSL 1.0.2zd (Affected 1.0.2-1.0.2zc).",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-835"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"http://packetstormsecurity.com/files/167344/OpenSSL-1.0.2-1.1.1-3.0-BN_mod_sqrt-Infinite-Loop.html",
						"http://seclists.org/fulldisclosure/2022/May/33",
						"http://seclists.org/fulldisclosure/2022/May/35",
						"http://seclists.org/fulldisclosure/2022/May/38",
						"https://access.redhat.com/errata/RHSA-2022:5326",
						"https://access.redhat.com/security/cve/CVE-2022-0778",
						"https://bugzilla.redhat.com/2062202",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2062202",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-712929.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-0778",
						"https://errata.almalinux.org/8/ALSA-2022-5326.html",
						"https://errata.rockylinux.org/RLSA-2022:4899",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=3118eb64934499d93db3230748a452351d1d9a65",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=380085481c64de749a6dd25cdf0bcf4360b30f83",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=a466912611aa6cbdf550cd10601390e587451246",
						"https://github.com/advisories/GHSA-x3mh-jvjw-3xwx",
						"https://linux.oracle.com/cve/CVE-2022-0778.html",
						"https://linux.oracle.com/errata/ELSA-2022-9272.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00023.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00024.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/323SNN6ZX7PRJJWP2BUAFLPUAE42XWLZ/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/GDB3GQVJPXJE7X5C5JN6JAA4XUDWD6E6/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/W6K3PR542DXWLEFFMFIDMME4CWMHJRMG/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-0778",
						"https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2022-0002",
						"https://rustsec.org/advisories/RUSTSEC-2022-0014.html",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20220321-0002/",
						"https://security.netapp.com/advisory/ntap-20220429-0005/",
						"https://support.apple.com/kb/HT213255",
						"https://support.apple.com/kb/HT213256",
						"https://support.apple.com/kb/HT213257",
						"https://ubuntu.com/security/notices/USN-5328-1",
						"https://ubuntu.com/security/notices/USN-5328-2",
						"https://www.debian.org/security/2022/dsa-5103",
						"https://www.openssl.org/news/secadv/20220315.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujul2022.html",
						"https://www.tenable.com/security/tns-2022-06",
						"https://www.tenable.com/security/tns-2022-07",
						"https://www.tenable.com/security/tns-2022-08",
						"https://www.tenable.com/security/tns-2022-09"
					],
					"PublishedDate": "2022-03-15T17:15:00Z",
					"LastModifiedDate": "2022-11-09T20:43:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-3711",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1l-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-3711",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: SM2 Decryption Buffer Overflow",
					"Description": "In order to decrypt SM2 encrypted data an application is expected to call the API function EVP_PKEY_decrypt(). Typically an application will call this function twice. The first time, on entry, the \"out\" parameter can be NULL and, on exit, the \"outlen\" parameter is populated with the buffer size required to hold the decrypted plaintext. The application can then allocate a sufficiently sized buffer and call EVP_PKEY_decrypt() again, but this time passing a non-NULL value for the \"out\" parameter. A bug in the implementation of the SM2 decryption code means that the calculation of the buffer size required to hold the plaintext returned by the first call to EVP_PKEY_decrypt() can be smaller than the actual size required by the second call. This can lead to a buffer overflow when EVP_PKEY_decrypt() is called by the application a second time with a buffer that is too small. A malicious attacker who is able present SM2 content for decryption to an application could cause attacker chosen data to overflow the buffer by up to a maximum of 62 bytes altering the contents of other data held after the buffer, possibly changing application behaviour or causing the application to crash. The location of the buffer is application dependent but is typically heap allocated. Fixed in OpenSSL 1.1.1l (Affected 1.1.1-1.1.1k).",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-120"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 7.5,
							"V3Score": 9.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2021/08/26/2",
						"https://access.redhat.com/security/cve/CVE-2021-3711",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-389290.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3711",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=59f5e75f3bced8fc0e130d72a3f582cf7b480b46",
						"https://github.com/advisories/GHSA-5ww6-px42-wc85",
						"https://lists.apache.org/thread.html/r18995de860f0e63635f3008fd2a6aca82394249476d21691e7c59c9e@%3Cdev.tomcat.apache.org%3E",
						"https://lists.apache.org/thread.html/rad5d9f83f0d11fb3f8bb148d179b8a9ad7c6a17f18d70e5805a713d1@%3Cdev.tomcat.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-3711",
						"https://rustsec.org/advisories/RUSTSEC-2021-0097.html",
						"https://security.gentoo.org/glsa/202209-02",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20210827-0010/",
						"https://security.netapp.com/advisory/ntap-20211022-0003/",
						"https://ubuntu.com/security/notices/USN-5051-1",
						"https://www.debian.org/security/2021/dsa-4963",
						"https://www.openssl.org/news/secadv/20210824.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html",
						"https://www.oracle.com/security-alerts/cpuoct2021.html",
						"https://www.tenable.com/security/tns-2021-16",
						"https://www.tenable.com/security/tns-2022-02"
					],
					"PublishedDate": "2021-08-24T15:15:00Z",
					"LastModifiedDate": "2022-12-06T21:23:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-3712",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1l-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-3712",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Read buffer overruns processing ASN.1 strings",
					"Description": "ASN.1 strings are represented internally within OpenSSL as an ASN1_STRING structure which contains a buffer holding the string data and a field holding the buffer length. This contrasts with normal C strings which are repesented as a buffer for the string data which is terminated with a NUL (0) byte. Although not a strict requirement, ASN.1 strings that are parsed using OpenSSL's own \"d2i\" functions (and other similar parsing functions) as well as any string whose value has been set with the ASN1_STRING_set() function will additionally NUL terminate the byte array in the ASN1_STRING structure. However, it is possible for applications to directly construct valid ASN1_STRING structures which do not NUL terminate the byte array by directly setting the \"data\" and \"length\" fields in the ASN1_STRING array. This can also happen by using the ASN1_STRING_set0() function. Numerous OpenSSL functions that print ASN.1 data have been found to assume that the ASN1_STRING byte array will be NUL terminated, even though this is not guaranteed for strings that have been directly constructed. Where an application requests an ASN.1 structure to be printed, and where that ASN.1 structure contains ASN1_STRINGs that have been directly constructed by the application without NUL terminating the \"data\" field, then a read buffer overrun can occur. The same thing can also occur during name constraints processing of certificates (for example if a certificate has been directly constructed by the application instead of loading it via the OpenSSL parsing functions, and the certificate contains non NUL terminated ASN1_STRING structures). It can also occur in the X509_get1_email(), X509_REQ_get1_email() and X509_get1_ocsp() functions. If a malicious actor can cause an application to directly construct an ASN1_STRING and then process it through one of the affected OpenSSL functions then this issue could be hit. This might result in a crash (causing a Denial of Service attack). It could also result in the disclosure of private memory contents (such as private keys, or sensitive plaintext). Fixed in OpenSSL 1.1.1l (Affected 1.1.1-1.1.1k). Fixed in OpenSSL 1.0.2za (Affected 1.0.2-1.0.2y).",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-125"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:P/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V2Score": 5.8,
							"V3Score": 7.4
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2021/08/26/2",
						"https://access.redhat.com/hydra/rest/securitydata/cve/CVE-2021-3712.json",
						"https://access.redhat.com/security/cve/CVE-2021-3712",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-244969.pdf",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-389290.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3712",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=94d23fcff9b2a7a8368dfe52214d5c2569882c11",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=ccb0a11145ee72b042d10593a64eaf9e8a55ec12",
						"https://github.com/advisories/GHSA-q9wj-f4qw-6vfj",
						"https://kc.mcafee.com/corporate/index?page=content\u0026id=SB10366",
						"https://linux.oracle.com/cve/CVE-2021-3712.html",
						"https://linux.oracle.com/errata/ELSA-2022-9023.html",
						"https://lists.apache.org/thread.html/r18995de860f0e63635f3008fd2a6aca82394249476d21691e7c59c9e@%3Cdev.tomcat.apache.org%3E",
						"https://lists.apache.org/thread.html/rad5d9f83f0d11fb3f8bb148d179b8a9ad7c6a17f18d70e5805a713d1@%3Cdev.tomcat.apache.org%3E",
						"https://lists.debian.org/debian-lts-announce/2021/09/msg00014.html",
						"https://lists.debian.org/debian-lts-announce/2021/09/msg00021.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-3712",
						"https://rustsec.org/advisories/RUSTSEC-2021-0098.html",
						"https://security.gentoo.org/glsa/202209-02",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20210827-0010/",
						"https://ubuntu.com/security/notices/USN-5051-1",
						"https://ubuntu.com/security/notices/USN-5051-2",
						"https://ubuntu.com/security/notices/USN-5051-3",
						"https://ubuntu.com/security/notices/USN-5051-4 (regression only in trusty/esm)",
						"https://ubuntu.com/security/notices/USN-5088-1",
						"https://www.debian.org/security/2021/dsa-4963",
						"https://www.openssl.org/news/secadv/20210824.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html",
						"https://www.oracle.com/security-alerts/cpuoct2021.html",
						"https://www.tenable.com/security/tns-2021-16",
						"https://www.tenable.com/security/tns-2022-02"
					],
					"PublishedDate": "2021-08-24T15:15:00Z",
					"LastModifiedDate": "2022-12-06T21:23:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-0778",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1n-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-0778",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Infinite loop in BN_mod_sqrt() reachable when parsing certificates",
					"Description": "The BN_mod_sqrt() function, which computes a modular square root, contains a bug that can cause it to loop forever for non-prime moduli. Internally this function is used when parsing certificates that contain elliptic curve public keys in compressed form or explicit elliptic curve parameters with a base point encoded in compressed form. It is possible to trigger the infinite loop by crafting a certificate that has invalid explicit curve parameters. Since certificate parsing happens prior to verification of the certificate signature, any process that parses an externally supplied certificate may thus be subject to a denial of service attack. The infinite loop can also be reached when parsing crafted private keys as they can contain explicit elliptic curve parameters. Thus vulnerable situations include: - TLS clients consuming server certificates - TLS servers consuming client certificates - Hosting providers taking certificates or private keys from customers - Certificate authorities parsing certification requests from subscribers - Anything else which parses ASN.1 elliptic curve parameters Also any other applications that use the BN_mod_sqrt() where the attacker can control the parameter values are vulnerable to this DoS issue. In the OpenSSL 1.0.2 version the public key is not parsed during initial parsing of the certificate which makes it slightly harder to trigger the infinite loop. However any operation which requires the public key from the certificate will trigger the infinite loop. In particular the attacker can use a self-signed certificate to trigger the loop during verification of the certificate signature. This issue affects OpenSSL versions 1.0.2, 1.1.1 and 3.0. It was addressed in the releases of 1.1.1n and 3.0.2 on the 15th March 2022. Fixed in OpenSSL 3.0.2 (Affected 3.0.0,3.0.1). Fixed in OpenSSL 1.1.1n (Affected 1.1.1-1.1.1m). Fixed in OpenSSL 1.0.2zd (Affected 1.0.2-1.0.2zc).",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-835"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"http://packetstormsecurity.com/files/167344/OpenSSL-1.0.2-1.1.1-3.0-BN_mod_sqrt-Infinite-Loop.html",
						"http://seclists.org/fulldisclosure/2022/May/33",
						"http://seclists.org/fulldisclosure/2022/May/35",
						"http://seclists.org/fulldisclosure/2022/May/38",
						"https://access.redhat.com/errata/RHSA-2022:5326",
						"https://access.redhat.com/security/cve/CVE-2022-0778",
						"https://bugzilla.redhat.com/2062202",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2062202",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-712929.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-0778",
						"https://errata.almalinux.org/8/ALSA-2022-5326.html",
						"https://errata.rockylinux.org/RLSA-2022:4899",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=3118eb64934499d93db3230748a452351d1d9a65",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=380085481c64de749a6dd25cdf0bcf4360b30f83",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=a466912611aa6cbdf550cd10601390e587451246",
						"https://github.com/advisories/GHSA-x3mh-jvjw-3xwx",
						"https://linux.oracle.com/cve/CVE-2022-0778.html",
						"https://linux.oracle.com/errata/ELSA-2022-9272.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00023.html",
						"https://lists.debian.org/debian-lts-announce/2022/03/msg00024.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/323SNN6ZX7PRJJWP2BUAFLPUAE42XWLZ/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/GDB3GQVJPXJE7X5C5JN6JAA4XUDWD6E6/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/W6K3PR542DXWLEFFMFIDMME4CWMHJRMG/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-0778",
						"https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2022-0002",
						"https://rustsec.org/advisories/RUSTSEC-2022-0014.html",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20220321-0002/",
						"https://security.netapp.com/advisory/ntap-20220429-0005/",
						"https://support.apple.com/kb/HT213255",
						"https://support.apple.com/kb/HT213256",
						"https://support.apple.com/kb/HT213257",
						"https://ubuntu.com/security/notices/USN-5328-1",
						"https://ubuntu.com/security/notices/USN-5328-2",
						"https://www.debian.org/security/2022/dsa-5103",
						"https://www.openssl.org/news/secadv/20220315.txt",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujul2022.html",
						"https://www.tenable.com/security/tns-2022-06",
						"https://www.tenable.com/security/tns-2022-07",
						"https://www.tenable.com/security/tns-2022-08",
						"https://www.tenable.com/security/tns-2022-09"
					],
					"PublishedDate": "2022-03-15T17:15:00Z",
					"LastModifiedDate": "2022-11-09T20:43:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-4450",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-4450",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: double free after calling PEM_read_bio_ex",
					"Description": "The function PEM_read_bio_ex() reads a PEM file from a BIO and parses and decodes the \"name\" (e.g. \"CERTIFICATE\"), any header data and the payload data. If the function succeeds then the \"name_out\", \"header\" and \"data\" arguments are populated with pointers to buffers containing the relevant decoded data. The caller is responsible for freeing those buffers. It is possible to construct a PEM file that results in 0 bytes of payload data. In this case PEM_read_bio_ex() will return a failure code but will populate the header argument with a pointer to a buffer that has already been freed. If the caller also frees this buffer then a double free will occur. This will most likely lead to a crash. This could be exploited by an attacker who has the ability to supply malicious PEM files for parsing to achieve a denial of service attack. The functions PEM_read_bio() and PEM_read() are simple wrappers around PEM_read_bio_ex() and therefore these functions are also directly affected. These functions are also called indirectly by a number of other OpenSSL functions including PEM_X509_INFO_read_bio_ex() and SSL_CTX_use_serverinfo_file() which are also vulnerable. Some OpenSSL internal uses of these functions are not vulnerable because the caller does not free the header argument if PEM_read_bio_ex() returns a failure code. These locations include the PEM_read_bio_TYPE() functions as well as the decoders introduced in OpenSSL 3.0. The OpenSSL asn1parse command line application is also impacted by this issue.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-415"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2022-4450",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-4450",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=63bcf189be73a9cc1264059bed6f57974be74a83",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=bbcf509bd046b34cca19c766bbddc31683d0858b",
						"https://github.com/advisories/GHSA-v5w6-wcm8-jm4q",
						"https://linux.oracle.com/cve/CVE-2022-4450.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-4450",
						"https://rustsec.org/advisories/RUSTSEC-2023-0010.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0215",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0215",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: use-after-free following BIO_new_NDEF",
					"Description": "The public API function BIO_new_NDEF is a helper function used for streaming ASN.1 data via a BIO. It is primarily used internally to OpenSSL to support the SMIME, CMS and PKCS7 streaming capabilities, but may also be called directly by end user applications. The function receives a BIO from the caller, prepends a new BIO_f_asn1 filter BIO onto the front of it to form a BIO chain, and then returns the new head of the BIO chain to the caller. Under certain conditions, for example if a CMS recipient public key is invalid, the new filter BIO is freed and the function returns a NULL result indicating a failure. However, in this case, the BIO chain is not properly cleaned up and the BIO passed by the caller still retains internal pointers to the previously freed filter BIO. If the caller then goes on to call BIO_pop() on the BIO then a use-after-free will occur. This will most likely result in a crash. This scenario occurs directly in the internal function B64_write_ASN1() which may cause BIO_new_NDEF() to be called and will subsequently call BIO_pop() on the BIO. This internal function is in turn called by the public API functions PEM_write_bio_ASN1_stream, PEM_write_bio_CMS_stream, PEM_write_bio_PKCS7_stream, SMIME_write_ASN1, SMIME_write_CMS and SMIME_write_PKCS7. Other public API functions that may be impacted by this include i2d_ASN1_bio_stream, BIO_new_CMS, BIO_new_PKCS7, i2d_CMS_bio_stream and i2d_PKCS7_bio_stream. The OpenSSL cms and smime command line applications are similarly affected.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2023-0215",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0215",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=8818064ce3c3c0f1b740a5aaba2a987e75bfbafd",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=9816136fe31d92ace4037d5da5257f763aeeb4eb",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=c3829dd8825c654652201e16f8a0a0c46ee3f344",
						"https://github.com/advisories/GHSA-r7jw-wp68-3xch",
						"https://linux.oracle.com/cve/CVE-2023-0215.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2023-0215",
						"https://rustsec.org/advisories/RUSTSEC-2023-0009.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://ubuntu.com/security/notices/USN-5845-1",
						"https://ubuntu.com/security/notices/USN-5845-2",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0286",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0286",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: X.400 address type confusion in X.509 GeneralName",
					"Description": "There is a type confusion vulnerability relating to X.400 address processing inside an X.509 GeneralName. X.400 addresses were parsed as an ASN1_STRING but the public structure definition for GENERAL_NAME incorrectly specified the type of the x400Address field as ASN1_TYPE. This field is subsequently interpreted by the OpenSSL function GENERAL_NAME_cmp as an ASN1_TYPE rather than an ASN1_STRING. When CRL checking is enabled (i.e. the application sets the X509_V_FLAG_CRL_CHECK flag), this vulnerability may allow an attacker to pass arbitrary pointers to a memcmp call, enabling them to read memory contents or enact a denial of service. In most cases, the attack requires the attacker to provide both the certificate chain and CRL, neither of which need to have a valid signature. If the attacker only controls one of these inputs, the other input must already contain an X.400 address as a CRL distribution point, which is uncommon. As such, this vulnerability is most likely to only affect applications which have implemented their own functionality for retrieving CRLs over a network.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-843"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:H",
							"V3Score": 7.4
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2023-0286",
						"https://access.redhat.com/security/cve/cve-2023-0286",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0286",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2c6c9d439b484e1ba9830d8454a34fa4f80fdfe9",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2f7530077e0ef79d98718138716bc51ca0cad658",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=fd2af07dc083a350c959147097003a14a5e8ac4d",
						"https://github.com/advisories/GHSA-x4qr-2fvf-3mr5",
						"https://github.com/pyca/cryptography/security/advisories/GHSA-x4qr-2fvf-3mr5",
						"https://linux.oracle.com/cve/CVE-2023-0286.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2023-0286",
						"https://rustsec.org/advisories/RUSTSEC-2023-0006.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://ubuntu.com/security/notices/USN-5845-1",
						"https://ubuntu.com/security/notices/USN-5845-2",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T15:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-2097",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1q-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-2097",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: AES OCB fails to encrypt some bytes",
					"Description": "AES OCB mode for 32-bit x86 platforms using the AES-NI assembly optimised implementation will not encrypt the entirety of the data under some circumstances. This could reveal sixteen bytes of data that was preexisting in the memory that wasn't written. In the special case of \"in place\" encryption, sixteen bytes of the plaintext would be revealed. Since OpenSSL does not support OCB based cipher suites for TLS and DTLS, they are both unaffected. Fixed in OpenSSL 3.0.5 (Affected 3.0.0-3.0.4). Fixed in OpenSSL 1.1.1q (Affected 1.1.1-1.1.1p).",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-326"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
							"V2Score": 5,
							"V3Score": 5.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 5.3
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2022:6224",
						"https://access.redhat.com/security/cve/CVE-2022-2097",
						"https://bugzilla.redhat.com/2081494",
						"https://bugzilla.redhat.com/2087911",
						"https://bugzilla.redhat.com/2087913",
						"https://bugzilla.redhat.com/2097310",
						"https://bugzilla.redhat.com/2104905",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2081494",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2097310",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2100554",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2104905",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-332410.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-1292",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2068",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2097",
						"https://errata.almalinux.org/9/ALSA-2022-6224.html",
						"https://errata.rockylinux.org/RLSA-2022:5818",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=919925673d6c9cfed3c1085497f5dfbbed5fc431",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=a98f339ddd7e8f487d6e0088d4a9a42324885a93",
						"https://github.com/advisories/GHSA-3wx7-46ch-7rq2",
						"https://linux.oracle.com/cve/CVE-2022-2097.html",
						"https://linux.oracle.com/errata/ELSA-2022-9751.html",
						"https://lists.debian.org/debian-lts-announce/2023/02/msg00019.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/R6CK57NBQFTPUMXAPJURCGXUYT76NQAK/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/V6567JERRHHJW2GNGJGKDRNHR7SNPZK7/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/VCMNWKERPBKOEBNL7CLTTX3ZZCZLH7XA/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-2097",
						"https://rustsec.org/advisories/RUSTSEC-2022-0032.html",
						"https://security.gentoo.org/glsa/202210-02",
						"https://security.netapp.com/advisory/ntap-20220715-0011/",
						"https://ubuntu.com/security/notices/USN-5502-1",
						"https://www.debian.org/security/2023/dsa-5343",
						"https://www.openssl.org/news/secadv/20220705.txt"
					],
					"PublishedDate": "2022-07-05T11:15:00Z",
					"LastModifiedDate": "2023-02-23T16:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-4304",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-4304",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: timing attack in RSA Decryption implementation",
					"Description": "A timing based side channel exists in the OpenSSL RSA Decryption implementation which could be sufficient to recover a plaintext across a network in a Bleichenbacher style attack. To achieve a successful decryption an attacker would have to be able to send a very large number of trial messages for decryption. The vulnerability affects all RSA padding modes: PKCS#1 v1.5, RSA-OEAP and RSASVE. For example, in a TLS connection, RSA is commonly used by a client to send an encrypted pre-master secret to the server. An attacker that had observed a genuine connection between a client and a server could use this flaw to send trial messages to the server and record the time taken to process them. After a sufficiently large number of messages the attacker could recover the pre-master secret used for the original connection and thus be able to decrypt the application data sent over that connection.",
					"Severity": "MEDIUM",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.9
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.9
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N",
							"V3Score": 5.9
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2023:0946",
						"https://access.redhat.com/security/cve/CVE-2022-4304",
						"https://bugzilla.redhat.com/2164440",
						"https://bugzilla.redhat.com/2164487",
						"https://bugzilla.redhat.com/2164488",
						"https://bugzilla.redhat.com/2164492",
						"https://bugzilla.redhat.com/2164494",
						"https://bugzilla.redhat.com/2164497",
						"https://bugzilla.redhat.com/2164499",
						"https://bugzilla.redhat.com/2164500",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-4304",
						"https://errata.almalinux.org/9/ALSA-2023-0946.html",
						"https://github.com/advisories/GHSA-p52g-cm5j-mjv4",
						"https://linux.oracle.com/cve/CVE-2022-4304.html",
						"https://linux.oracle.com/errata/ELSA-2023-1405.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-4304",
						"https://rustsec.org/advisories/RUSTSEC-2023-0007.html",
						"https://ubuntu.com/security/notices/USN-5844-1",
						"https://www.openssl.org/news/secadv/20230207.txt"
					],
					"PublishedDate": "2023-02-08T20:15:00Z",
					"LastModifiedDate": "2023-02-24T17:13:00Z"
				},
				{
					"VulnerabilityID": "CVE-2023-0464",
					"PkgID": "libssl1.1@1.1.1k-r0",
					"PkgName": "libssl1.1",
					"InstalledVersion": "1.1.1k-r0",
					"FixedVersion": "1.1.1t-r1",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2023-0464",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "openssl: Denial of service by excessive resource usage in verifying X509 policy constraints",
					"Description": "A security vulnerability has been identified in all supported versions of OpenSSL related to the verification of X.509 certificate chains that include policy constraints. Attackers may be able to exploit this vulnerability by creating a malicious certificate chain that triggers exponential use of computational resources, leading to a denial-of-service (DoS) attack on affected systems. Policy processing is disabled by default but can be enabled by passing the `-policy' argument to the command line utilities or by calling the `X509_VERIFY_PARAM_set1_policies()' function.",
					"Severity": "MEDIUM",
					"CVSS": {
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 5.9
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2023-0464",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0464",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2017771e2db3e2b96f89bbe8766c3209f6a99545",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=2dcd4f1e3115f38cefa43e3efbe9b801c27e642e",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=879f7080d7e141f415c79eaa3a8ac4a3dad0348b",
						"https://git.openssl.org/gitweb/?p=openssl.git;a=commitdiff;h=959c59c7a0164117e7f8366466a32bb1f8d77ff1",
						"https://www.openssl.org/news/secadv/20230322.txt"
					],
					"PublishedDate": "2023-03-22T17:15:00Z",
					"LastModifiedDate": "2023-03-22T18:10:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42378",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42378",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_i()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_i function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42378",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42378",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42378",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:22:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42379",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42379",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the next_input_file()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the next_input_file function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42379",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42379",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42379",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:22:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42380",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42380",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the clrvar()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the clrvar function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42380",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42380",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42380",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:10:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42381",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42381",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the hash_init()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the hash_init function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42381",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42381",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42381",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:13:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42382",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42382",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_s()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the getvar_s function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42382",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42382",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42382",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:16:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42383",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42383",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42383",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://security.netapp.com/advisory/ntap-20211223-0002/"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:16:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42384",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42384",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the handle_special()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the handle_special function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42384",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42384",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42384",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42385",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42385",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the evaluate function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42385",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42385",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42385",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42386",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r6",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42386",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: use-after-free in awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the nvalloc()",
					"Description": "A use-after-free in Busybox's awk applet leads to denial of service and possibly code execution when processing a crafted awk pattern in the nvalloc function",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-416"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 7.2
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 6.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42386",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42386",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42386",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-01-04T17:14:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-28391",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r7",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-28391",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: remote attackers may execute arbitrary code if netstat is used",
					"Description": "BusyBox through 1.35.0 allows remote attackers to execute arbitrary code if netstat is used to print a DNS PTR record's value to a VT compatible terminal. Alternatively, the attacker could choose to change the terminal's colors.",
					"Severity": "HIGH",
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
							"V2Score": 6.8,
							"V3Score": 8.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V3Score": 6.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2022-28391",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28391",
						"https://git.alpinelinux.org/aports/plain/main/busybox/0001-libbb-sockaddr2str-ensure-only-printable-characters-.patch",
						"https://git.alpinelinux.org/aports/plain/main/busybox/0002-nslookup-sanitize-all-printed-strings-with-printable.patch",
						"https://gitlab.alpinelinux.org/alpine/aports/-/issues/13661",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-28391"
					],
					"PublishedDate": "2022-04-03T21:15:00Z",
					"LastModifiedDate": "2022-08-11T18:44:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42374",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r4",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42374",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: out-of-bounds read in unlzma applet leads to information leak and denial of service when crafted LZMA-compressed input is decompressed",
					"Description": "An out-of-bounds heap read in Busybox's unlzma applet leads to information leak and denial of service when crafted LZMA-compressed input is decompressed. This can be triggered by any applet/format that",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-125"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:M/Au:N/C:P/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:H",
							"V2Score": 3.3,
							"V3Score": 5.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:H",
							"V3Score": 5.7
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42374",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42374",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-42374",
						"https://security.netapp.com/advisory/ntap-20211223-0002/",
						"https://ubuntu.com/security/notices/USN-5179-1"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-03-31T16:29:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-42375",
					"PkgID": "ssl_client@1.33.1-r3",
					"PkgName": "ssl_client",
					"InstalledVersion": "1.33.1-r3",
					"FixedVersion": "1.33.1-r5",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-42375",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "busybox: incorrect handling of a special element in ash applet leads to denial of service when processing a crafted shell command",
					"Description": "An incorrect handling of a special element in Busybox's ash applet leads to denial of service when processing a crafted shell command, due to the shell mistaking specific characters for reserved characters. This may be used for DoS under rare conditions of filtered command input.",
					"Severity": "MEDIUM",
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:M/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 1.9,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:H/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 4.1
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-42375",
						"https://jfrog.com/blog/unboxing-busybox-14-new-vulnerabilities-uncovered-by-claroty-and-jfrog/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/6T2TURBYYJGBMQTTN2DSOAIQGP7WCPGV/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UQXGOGWBIYWOIVXJVRKHZR34UMEHQBXS/",
						"https://security.netapp.com/advisory/ntap-20211223-0002/"
					],
					"PublishedDate": "2021-11-15T21:15:00Z",
					"LastModifiedDate": "2022-03-31T16:29:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-37434",
					"PkgID": "zlib@1.2.11-r3",
					"PkgName": "zlib",
					"InstalledVersion": "1.2.11-r3",
					"FixedVersion": "1.2.12-r2",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-37434",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "zlib: heap-based buffer over-read and overflow in inflate() in inflate.c via a large gzip header extra field",
					"Description": "zlib through 1.2.12 has a heap-based buffer over-read or buffer overflow in inflate in inflate.c via a large gzip header extra field. NOTE: only applications that call inflateGetHeader are affected. Some common applications bundle the affected zlib source code but may be unable to call inflateGetHeader (e.g., see the nodejs/node reference).",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-787"
					],
					"CVSS": {
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:H",
							"V3Score": 7
						}
					},
					"References": [
						"http://seclists.org/fulldisclosure/2022/Oct/41",
						"http://www.openwall.com/lists/oss-security/2022/08/05/2",
						"http://www.openwall.com/lists/oss-security/2022/08/09/1",
						"https://access.redhat.com/errata/RHSA-2022:8291",
						"https://access.redhat.com/security/cve/CVE-2022-37434",
						"https://bugzilla.redhat.com/2116639",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2053198",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2077431",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2081296",
						"https://bugzilla.redhat.com/show_bug.cgi?id=2116639",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-37434",
						"https://errata.almalinux.org/9/ALSA-2022-8291.html",
						"https://errata.rockylinux.org/RLSA-2022:8291",
						"https://github.com/curl/curl/issues/9271",
						"https://github.com/ivd38/zlib_overflow",
						"https://github.com/madler/zlib/blob/21767c654d31d2dccdde4330529775c6c5fd5389/zlib.h#L1062-L1063",
						"https://github.com/madler/zlib/commit/eff308af425b67093bab25f80f1ae950166bece1",
						"https://github.com/nodejs/node/blob/75b68c6e4db515f76df73af476eccf382bbcb00a/deps/zlib/inflate.c#L762-L764",
						"https://linux.oracle.com/cve/CVE-2022-37434.html",
						"https://linux.oracle.com/errata/ELSA-2023-1095.html",
						"https://lists.debian.org/debian-lts-announce/2022/09/msg00012.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/JWN4VE3JQR4O2SOUS5TXNLANRPMHWV4I/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/NMBOJ77A7T7PQCARMDUK75TE6LLESZ3O/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/PAVPQNCG3XRLCLNSQRM3KAN5ZFMVXVTY/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/X5U7OTKZSHY2I3ZFJSR2SHFHW72RKGDK/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/YRQAI7H4M4RQZ2IWZUEEXECBE5D56BH2/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-37434",
						"https://security.netapp.com/advisory/ntap-20220901-0005/",
						"https://support.apple.com/kb/HT213488",
						"https://support.apple.com/kb/HT213489",
						"https://support.apple.com/kb/HT213490",
						"https://support.apple.com/kb/HT213491",
						"https://support.apple.com/kb/HT213493",
						"https://support.apple.com/kb/HT213494",
						"https://ubuntu.com/security/notices/USN-5570-1",
						"https://ubuntu.com/security/notices/USN-5570-2",
						"https://ubuntu.com/security/notices/USN-5573-1",
						"https://www.debian.org/security/2022/dsa-5218"
					],
					"PublishedDate": "2022-08-05T07:15:00Z",
					"LastModifiedDate": "2023-01-09T16:44:00Z"
				},
				{
					"VulnerabilityID": "CVE-2018-25032",
					"PkgID": "zlib@1.2.11-r3",
					"PkgName": "zlib",
					"InstalledVersion": "1.2.11-r3",
					"FixedVersion": "1.2.12-r0",
					"Layer": {
						"Digest": "sha256:29291e31a76a7e560b9b7ad3cada56e8c18d50a96cca8a2573e4f4689d7aca77",
						"DiffID": "sha256:bc276c40b172b1c5467277d36db5308a203a48262d5f278766cf083947d05466"
					},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2018-25032",
					"DataSource": {
						"ID": "alpine",
						"Name": "Alpine Secdb",
						"URL": "https://secdb.alpinelinux.org/"
					},
					"Title": "zlib: A flaw found in zlib when compressing (not decompressing) certain inputs",
					"Description": "zlib before 1.2.12 allows memory corruption when deflating (i.e., when compressing) if the input has many distant matches.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-787"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:H",
							"V3Score": 8.2
						}
					},
					"References": [
						"http://seclists.org/fulldisclosure/2022/May/33",
						"http://seclists.org/fulldisclosure/2022/May/35",
						"http://seclists.org/fulldisclosure/2022/May/38",
						"http://www.openwall.com/lists/oss-security/2022/03/25/2",
						"http://www.openwall.com/lists/oss-security/2022/03/26/1",
						"https://access.redhat.com/errata/RHSA-2022:8420",
						"https://access.redhat.com/hydra/rest/securitydata/cve/CVE-2018-25032.json",
						"https://access.redhat.com/security/cve/CVE-2018-25032",
						"https://bugzilla.redhat.com/2067945",
						"https://cert-portal.siemens.com/productcert/pdf/ssa-333517.pdf",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-25032",
						"https://errata.almalinux.org/9/ALSA-2022-8420.html",
						"https://github.com/madler/zlib/commit/5c44459c3b28a9bd3283aaceab7c615f8020c531",
						"https://github.com/madler/zlib/compare/v1.2.11...v1.2.12",
						"https://github.com/madler/zlib/issues/605",
						"https://github.com/sparklemotion/nokogiri/releases/tag/v1.13.4",
						"https://github.com/sparklemotion/nokogiri/security/advisories/GHSA-v6gp-9mmm-c6p5",
						"https://groups.google.com/g/ruby-security-ann/c/vX7qSjsvWis/m/TJWN4oOKBwAJ",
						"https://linux.oracle.com/cve/CVE-2018-25032.html",
						"https://linux.oracle.com/errata/ELSA-2022-9565.html",
						"https://lists.debian.org/debian-lts-announce/2022/04/msg00000.html",
						"https://lists.debian.org/debian-lts-announce/2022/05/msg00008.html",
						"https://lists.debian.org/debian-lts-announce/2022/09/msg00023.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/DCZFIJBJTZ7CL5QXBFKTQ22Q26VINRUF/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/DF62MVMH3QUGMBDCB3DY2ERQ6EBHTADB/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/JZZPTWRYQULAOL3AW7RZJNVZ2UONXCV4/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/NS2D2GFPFGOJUL4WQ3DUAY7HF4VWQ77F/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/VOKNP2L734AEL47NRYGVZIKEFOUBQY5Y/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/XOKFMSNQ5D5WGMALBNBXU3GE442V74WU/",
						"https://nvd.nist.gov/vuln/detail/CVE-2018-25032",
						"https://security.gentoo.org/glsa/202210-42",
						"https://security.netapp.com/advisory/ntap-20220526-0009/",
						"https://security.netapp.com/advisory/ntap-20220729-0004/",
						"https://support.apple.com/kb/HT213255",
						"https://support.apple.com/kb/HT213256",
						"https://support.apple.com/kb/HT213257",
						"https://ubuntu.com/security/notices/USN-5355-1",
						"https://ubuntu.com/security/notices/USN-5355-2",
						"https://ubuntu.com/security/notices/USN-5359-1",
						"https://ubuntu.com/security/notices/USN-5359-2",
						"https://ubuntu.com/security/notices/USN-5739-1",
						"https://www.debian.org/security/2022/dsa-5111",
						"https://www.openwall.com/lists/oss-security/2022/03/24/1",
						"https://www.openwall.com/lists/oss-security/2022/03/28/1",
						"https://www.openwall.com/lists/oss-security/2022/03/28/3",
						"https://www.oracle.com/security-alerts/cpujul2022.html"
					],
					"PublishedDate": "2022-03-25T09:15:00Z",
					"LastModifiedDate": "2023-02-11T17:44:00Z"
				}
			]
		}
	]
}

module.exports = testData;