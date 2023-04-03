const testData = {
	"value": "alpine:3.14.1 (alpine 3.14.1)",
	"nodes": [
		{
			"value": "busybox@1.33.1-r3 (12, UNKNOWN: 0,LOW: 0,MEDIUM: 2,HIGH: 10,CRITICAL: 0)",
			"nodes": [
				{
					"value": "alpine-baselayout@3.2.0-r16",
					"nodes": []
				}
			]
		},
		{
			"value": "libcrypto1.1@1.1.1k-r0 (9, UNKNOWN: 0,LOW: 0,MEDIUM: 3,HIGH: 5,CRITICAL: 1)",
			"nodes": [
				{
					"value": "apk-tools@2.12.7-r0",
					"nodes": []
				},
				{
					"value": "libretls@3.3.3p1-r2",
					"nodes": [
						{
							"value": "ssl_client@1.33.1-r3",
							"nodes": []
						}
					]
				},
				{
					"value": "libssl1.1@1.1.1k-r0",
					"nodes": []
				}
			]
		},
		{
			"value": "libretls@3.3.3p1-r2 (1, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 1,CRITICAL: 0)",
			"nodes": [
				{
					"value": "ssl_client@1.33.1-r3",
					"nodes": []
				}
			]
		},
		{
			"value": "libssl1.1@1.1.1k-r0 (9, UNKNOWN: 0,LOW: 0,MEDIUM: 3,HIGH: 5,CRITICAL: 1)",
			"nodes": [
				{
					"value": "apk-tools@2.12.7-r0",
					"nodes": []
				},
				{
					"value": "libretls@3.3.3p1-r2",
					"nodes": [
						{
							"value": "ssl_client@1.33.1-r3",
							"nodes": []
						}
					]
				}
			]
		},
		{
			"value": "ssl_client@1.33.1-r3 (12, UNKNOWN: 0,LOW: 0,MEDIUM: 2,HIGH: 10,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "zlib@1.2.11-r3 (2, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 1,CRITICAL: 1)",
			"nodes": [
				{
					"value": "apk-tools@2.12.7-r0",
					"nodes": []
				}
			]
		}
	]
}
module.exports = testData;