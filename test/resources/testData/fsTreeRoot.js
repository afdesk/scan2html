const testData = {
	"value": "go.mod",
	"nodes": [
		{
			"value": "github.com/apache/thrift@v0.12.0 (3, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 3,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "github.com/aws/aws-sdk-go@v1.44.210 (2, UNKNOWN: 0,LOW: 1,MEDIUM: 1,HIGH: 0,CRITICAL: 0)",
			"nodes": [
				{
					"value": "github.com/aquasecurity/trivy@v0.38.0",
					"nodes": []
				},
				{
					"value": "github.com/hashicorp/go-getter@v1.7.0",
					"nodes": []
				}
			]
		},
		{
			"value": "github.com/bytecodealliance/wasmtime-go@v1.0.0 (3, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 2,CRITICAL: 1)",
			"nodes": [
				{
					"value": "github.com/open-policy-agent/opa@v0.44.1-0.20220927105354-00e835a7cc15",
					"nodes": [
						{
							"value": "github.com/aquasecurity/trivy@v0.38.0",
							"nodes": []
						}
					]
				}
			]
		},
		{
			"value": "github.com/dgrijalva/jwt-go@v3.2.0+incompatible (1, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 1,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "github.com/emicklei/go-restful@v2.9.5+incompatible (1, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 0,CRITICAL: 1)",
			"nodes": []
		},
		{
			"value": "github.com/labstack/echo/v4@v4.7.2 (1, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 0,CRITICAL: 1)",
			"nodes": []
		},
		{
			"value": "github.com/prometheus/prometheus@v2.5.0+incompatible (1, UNKNOWN: 0,LOW: 0,MEDIUM: 1,HIGH: 0,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "github.com/valyala/fasthttp@v1.30.0 (1, UNKNOWN: 0,LOW: 0,MEDIUM: 0,HIGH: 1,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489 (6, UNKNOWN: 0,LOW: 3,MEDIUM: 1,HIGH: 2,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "golang.org/x/image@v0.0.0-20190802002840-cff245a6509b (2, UNKNOWN: 1,LOW: 0,MEDIUM: 1,HIGH: 0,CRITICAL: 0)",
			"nodes": []
		},
		{
			"value": "k8s.io/kubernetes@v1.13.0 (18, UNKNOWN: 0,LOW: 3,MEDIUM: 12,HIGH: 3,CRITICAL: 0)",
			"nodes": []
		}
	]
}
module.exports = testData;